const customIdKey = {
  allUsers: [
    {
      __typename: 'User',
      _id: '5a6cf127c2b20834f6551481',
      email: 'Madisen_Braun@hotmail.com',
      posts: [
        {
          __typename: 'Post',
          _id: '5a6cf127c2b20834f6551483',
          title: 'Aut aut reiciendis',
        },
        {
          __typename: 'Post',
          _id: '5a6cf127c2b20834f6551485',
          title: 'Nesciunt esse',
        },
      ],
    },
    {
      __typename: 'User',
      _id: '5a6cf127c2b20834f6551482',
      email: 'Robel.Ansel@yahoo.com',
      posts: [
        {
          __typename: 'Post',
          _id: '5a6cf127c2b20834f6551484',
          title: 'Sunt ut aut',
        },
        {
          __typename: 'Post',
          _id: '5a6cf127c2b20834f6551486',
          title: 'Nihil assumenda',
        },
      ],
    },
  ],
  findComment: {
    __typename: 'Comment',
    _id: '5a6cf127c2b20834f655148a',
    message: 'Voluptates ex sint amet repellendus impedit nam.',
  },
}

const mergeTestData = {
  allComments: [
    {
      __typename: 'Comment',
      id: '5a6cf127c2b20834f655148e',
      author: {
        __typename: 'User',
        id: '5a6cf127c2b20834f6551481',
        email: 'Madisen_Braun@hotmail.com',
      },
    },
  ],
  findComment: {
    __typename: 'Comment',
    id: '5a6cf127c2b20834f655148e',
    message: 'Voluptates aut eum.',
  },
}

const noTypeNames = {
  allUsers: [
    {
      id: '5a6cf127c2b20834f6551481',
      email: 'Madisen_Braun@hotmail.com',
    },
    {
      id: '5a6cf127c2b20834f6551482',
      email: 'Robel.Ansel@yahoo.com',
    },
  ],
}

const noNested = {
  allUsers: [
    {
      __typename: 'User',
      id: '5a6cf127c2b20834f6551481',
      email: 'Madisen_Braun@hotmail.com',
    },
    {
      __typename: 'User',
      id: '5a6cf127c2b20834f6551482',
      email: 'Robel.Ansel@yahoo.com',
    },
  ],
  allPosts: [
    {
      __typename: 'Post',
      id: '5a6cf127c2b20834f6551483',
      likes: 0,
    },
    {
      __typename: 'Post',
      id: '5a6cf127c2b20834f6551484',
      likes: 10,
    },
    {
      __typename: 'Post',
      id: '5a6cf127c2b20834f6551485',
      likes: 23,
    },
    {
      __typename: 'Post',
      id: '5a6cf127c2b20834f6551486',
      likes: 3,
    },
  ],
  allComments: [
    {
      __typename: 'Comment',
      id: '5a6cf127c2b20834f655148e',
      message: 'Voluptates aut eum.',
    },
    {
      __typename: 'Comment',
      id: '5a6cf127c2b20834f6551487',
      message: 'Et soluta ipsam quas facilis possimus et.',
    },
    {
      __typename: 'Comment',
      id: '5a6cf127c2b20834f6551488',
      message: 'Tempore sed enim qui aliquam est saepe qui.',
    },
    {
      __typename: 'Comment',
      id: '5a6cf127c2b20834f6551489',
      message: 'Ea et est autem dicta necessitatibus vel.',
    },
    {
      __typename: 'Comment',
      id: '5a6cf127c2b20834f655148b',
      message: 'Consectetur cum est odit et qui.',
    },
    {
      __typename: 'Comment',
      id: '5a6cf127c2b20834f655148d',
      message: 'Aut vel possimus nisi qui.',
    },
    {
      __typename: 'Comment',
      id: '5a6cf127c2b20834f655148a',
      message: 'Voluptates ex sint amet repellendus impedit nam.',
    },
    {
      __typename: 'Comment',
      id: '5a6cf127c2b20834f655148c',
      message: 'Voluptas quidem et saepe voluptatibus enim est.',
    },
  ],
}

const nested = {
  allUsers: [
    {
      __typename: 'User',
      id: '5a6cf127c2b20834f6551481',
      email: 'Madisen_Braun@hotmail.com',
      posts: [
        {
          __typename: 'Post',
          id: '5a6cf127c2b20834f6551483',
          title: 'Aut aut reiciendis',
        },
        {
          __typename: 'Post',
          id: '5a6cf127c2b20834f6551485',
          title: 'Nesciunt esse',
        },
      ],
    },
    {
      __typename: 'User',
      id: '5a6cf127c2b20834f6551482',
      email: 'Robel.Ansel@yahoo.com',
      posts: [
        {
          __typename: 'Post',
          id: '5a6cf127c2b20834f6551484',
          title: 'Sunt ut aut',
        },
        {
          __typename: 'Post',
          id: '5a6cf127c2b20834f6551486',
          title: 'Nihil assumenda',
        },
      ],
    },
  ],
  allPosts: [
    {
      __typename: 'Post',
      id: '5a6cf127c2b20834f6551483',
      likes: 0,
      comments: [
        {
          __typename: 'Comment',
          id: '5a6cf127c2b20834f655148e',
          message: 'Voluptates aut eum.',
        },
      ],
    },
    {
      __typename: 'Post',
      id: '5a6cf127c2b20834f6551484',
      likes: 10,
      comments: [
        {
          __typename: 'Comment',
          id: '5a6cf127c2b20834f6551487',
          message: 'Et soluta ipsam quas facilis possimus et.',
        },
        {
          __typename: 'Comment',
          id: '5a6cf127c2b20834f6551488',
          message: 'Tempore sed enim qui aliquam est saepe qui.',
        },
        {
          __typename: 'Comment',
          id: '5a6cf127c2b20834f6551489',
          message: 'Ea et est autem dicta necessitatibus vel.',
        },
      ],
    },
    {
      __typename: 'Post',
      id: '5a6cf127c2b20834f6551485',
      likes: 23,
      comments: [
        {
          __typename: 'Comment',
          id: '5a6cf127c2b20834f655148b',
          message: 'Consectetur cum est odit et qui.',
        },
        {
          __typename: 'Comment',
          id: '5a6cf127c2b20834f655148d',
          message: 'Aut vel possimus nisi qui.',
        },
      ],
    },
    {
      __typename: 'Post',
      id: '5a6cf127c2b20834f6551486',
      likes: 3,
      comments: [
        {
          __typename: 'Comment',
          id: '5a6cf127c2b20834f655148a',
          message: 'Voluptates ex sint amet repellendus impedit nam.',
        },
        {
          __typename: 'Comment',
          id: '5a6cf127c2b20834f655148c',
          message: 'Voluptas quidem et saepe voluptatibus enim est.',
        },
      ],
    },
  ],
}

const listAndObject = {
  allUsers: [
    {
      __typename: 'User',
      id: '5a6cf127c2b20834f6551481',
      email: 'Madisen_Braun@hotmail.com',
      posts: [
        {
          __typename: 'Post',
          id: '5a6cf127c2b20834f6551483',
          title: 'Aut aut reiciendis',
        },
        {
          __typename: 'Post',
          id: '5a6cf127c2b20834f6551485',
          title: 'Nesciunt esse',
        },
      ],
    },
    {
      __typename: 'User',
      id: '5a6cf127c2b20834f6551482',
      email: 'Robel.Ansel@yahoo.com',
      posts: [
        {
          __typename: 'Post',
          id: '5a6cf127c2b20834f6551484',
          title: 'Sunt ut aut',
        },
        {
          __typename: 'Post',
          id: '5a6cf127c2b20834f6551486',
          title: 'Nihil assumenda',
        },
      ],
    },
  ],
  findComment: {
    __typename: 'Comment',
    id: '5a6cf127c2b20834f655148a',
    message: 'Voluptates ex sint amet repellendus impedit nam.',
  },
}

module.exports = {
  customIdKey,
  listAndObject,
  mergeTestData,
  nested,
  noNested,
  noTypeNames,
}
