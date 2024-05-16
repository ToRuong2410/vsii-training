export interface Category {
  id: number;
  title: string;
  subCategories: Category[] | null;
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Máy xúc',
    subCategories: [
      {
        id: 1,
        title: 'VietNam',
        subCategories: [
          {
            id: 1,
            title: 'Caterpillar',
            subCategories: null
          },
          {
            id: 2,
            title: 'Komatsu',
            subCategories: null
          },
          {
            id: 3,
            title: 'Doosan',
            subCategories: null
          }
        ]
      },
      {
        id: 2,
        title: 'China',
        subCategories: [
          {
            id: 1,
            title: 'Caterpillar',
            subCategories: []
          },
          {
            id: 2,
            title: 'Komatsu',
            subCategories: []
          },
          {
            id: 3,
            title: 'Doosan Infracore',
            subCategories: [
              {
                id: 1,
                title: 'con 1',
                subCategories: [
                  {
                    id: 1,
                    title: 'cháu 1',
                    subCategories: []
                  }
                ]
              },
              {
                id: 2,
                title: 'con 2',
                subCategories: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Tủ lạnh',
    subCategories: [
      {
        id: 1,
        title: 'VietNam',
        subCategories: [
          {
            id: 1,
            title: 'Toshiba',
            subCategories: []
          },
          {
            id: 2,
            title: 'Hitachi',
            subCategories: []
          },
          {
            id: 3,
            title: 'Samsung',
            subCategories: []
          }
        ]
      },
      {
        id: 2,
        title: 'China',
        subCategories: [
          {
            id: 1,
            title: 'Toshiba',
            subCategories: []
          },
          {
            id: 2,
            title: 'Hitachi',
            subCategories: []
          },
          {
            id: 3,
            title: 'Samsung',
            subCategories: []
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Điều hòa',
    subCategories: [
      {
        id: 1,
        title: 'VietNam',
        subCategories: [
          {
            id: 1,
            title: 'Panasonic',
            subCategories: []
          },
          {
            id: 2,
            title: 'Samsung',
            subCategories: []
          },
          {
            id: 3,
            title: 'LG',
            subCategories: []
          }
        ]
      },
      {
        id: 2,
        title: 'China',
        subCategories: [
          {
            id: 1,
            title: 'Panasonic',
            subCategories: []
          },
          {
            id: 2,
            title: 'Samsung',
            subCategories: []
          },
          {
            id: 3,
            title: 'LG',
            subCategories: []
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Máy chiếu',
    subCategories: []
  },
  {
    id: 3,
    title: 'Máy tính',
    subCategories: [
      {
        id: 1,
        title: 'VietNam',
        subCategories: []
      },
      {
        id: 2,
        title: 'China',
        subCategories: [
          {
            id: 1,
            title: 'Panasonic',
            subCategories: []
          },
          {
            id: 2,
            title: 'Samsung',
            subCategories: []
          },
          {
            id: 3,
            title: 'LG',
            subCategories: []
          }
        ]
      }
    ]
  }
];

export default categories;
