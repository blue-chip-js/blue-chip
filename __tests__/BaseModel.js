import BaseModel from "../src/BaseModel";
import Query from "../src/Query";

import resources from "../__testHelpers__/fixtrues/checklistsAndTasksNormalized";
import {Checklist, Task} from "../__testHelpers__/models";

describe("BaseModel", () => {
  test("query returns a Query", () => {
    expect(BaseModel.query(resources)).toBeInstanceOf(Query);
  });

  test("handle undefined resources", () => {
    expect(
      Checklist.query()
        .all()
        .toModels()
    ).toEqual([]);
    expect(
      Checklist.query(null)
        .all()
        .toModels()
    ).toEqual([]);
    expect(
      Checklist.query()
        .all()
        .toObjects()
    ).toEqual([]);
    expect(
      Checklist.query(null)
        .all()
        .toObjects()
    ).toEqual([]);
    expect(
      Checklist.query({})
        .all()
        .toObjects()
    ).toEqual([]);
    const a = {};
    expect(
      Checklist.query(a.b)
        .all()
        .toObjects()
    ).toEqual([]);
  });

  describe("models", () => {
    describe("all()", () => {
      test("Returns a list of models", () => {
        expect(
          Checklist.query(resources)
            .all()
            .toModels()
        ).toMatchSnapshot();
      });
    });

    describe("find()", () => {
      test("returns a single model", () => {
        const checklist = Checklist.query(resources).find(1);
        expect(checklist.id).toEqual(1);
        expect(checklist).toMatchSnapshot();
      });
    });

    describe("first()", () => {
      test("returns the first record in the store BY resource index", () => {
        const checklist = Checklist.query(resources).first();
        expect(checklist.id).toEqual(3);
        expect(checklist).toMatchSnapshot();
      });
    });

    describe("last()", () => {
      test("returns the last record in the store BY resource index", () => {
        const checklist = Checklist.query(resources).last();
        expect(checklist.id).toEqual(2);
        expect(checklist).toMatchSnapshot();
      });
    });

    describe("where()", () => {
      test("filters by name", () => {
        const checklist = Checklist.query(resources)
          .where({name: "Project Audit Rest"})
          .toModels()[0];
        expect(checklist.id).toEqual(2);
        expect(checklist).toMatchSnapshot();
      });

      test("filter by id", () => {
        const checklist = Checklist.query(resources)
          .where({id: 3})
          .toModels()[0];
        expect(checklist.id).toEqual(3);
        expect(checklist).toMatchSnapshot();
      });
    });

    describe("includes() hasMany", () => {
      test("check for hasMany includes", () => {
        const checklists = Checklist.query(resources)
          .all()
          .includes(["tasks"])
          .toModels();
        expect(checklists).toMatchSnapshot();
      });
    });

    describe("includes() belongsTo", () => {
      test("", () => {
        const tasks = Task.query(resources)
          .all()
          .includes(["checklist"])
          .toModels();
        expect(tasks).toMatchSnapshot();
      });
    });

    describe("hasMany()", () => {
      test("hasMany function", () => {
        const tasks = Checklist.query(resources)
          .find(1)
          .tasks()
          .toModels();
        expect(tasks).toMatchSnapshot();
      });
    });

    describe("belongsTo()", () => {
      test("", () => {
        const checklist = Task.query(resources)
          .find(1)
          .checklist();
        expect(checklist).toMatchSnapshot();
      });
    });
  });
  describe("objects", () => {
    describe("all()", () => {
      test("", () => {
        expect(
          Checklist.query(resources)
            .all()
            .toObjects()
        ).toMatchSnapshot();
      });
    });

    describe("find()", () => {
      test("", () => {
        const checklist = Checklist.query(resources).find(2);
        expect(checklist.id).toEqual(2);
        expect(checklist).toMatchSnapshot();
      });
    });

    describe("where()", () => {
      test("", () => {
        const checklist = Checklist.query(resources)
          .where({name: "Project Audit Rest"})
          .toObjects()[0];
        expect(checklist.id).toEqual(2);
        expect(checklist).toMatchSnapshot();
      });
    });

    describe("includes()", () => {
      test("", () => {
        const checklists = Checklist.query(resources)
          .all()
          .includes(["tasks"])
          .toObjects();
        expect(checklists).toMatchSnapshot();
      });
    });
  });
});
