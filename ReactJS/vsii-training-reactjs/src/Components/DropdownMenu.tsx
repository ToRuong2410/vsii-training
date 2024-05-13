import React from 'react';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';

interface Category {
  id: number;
  title: string;
  subcategories: subcategories[];
}

interface subcategories {
  id: number;
  country: string;
  children: string[];
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Máy xúc',
    subcategories: [
      {
        id: 1,
        country: 'VietNam',
        children: ['Caterpillar', 'Komatsu', 'Doosan Infracore']
      },
      {
        id: 2,
        country: 'China',
        children: ['Caterpillar', 'Komatsu', 'Doosan Infracore']
      }
    ]
  },
  {
    id: 2,
    title: 'Tủ lạnh',
    subcategories: [
      {
        id: 1,
        country: 'VietNam',
        children: ['Toshiba', 'Hitachi', 'Samsung']
      },
      {
        id: 2,
        country: 'China',
        children: ['Toshiba', 'Hitachi', 'Samsung']
      }
    ]
  },
  {
    id: 3,
    title: 'Điều hòa',
    subcategories: [
      {
        id: 1,
        country: 'VietNam',
        children: ['Panasonic', 'Samsung', 'LG']
      },
      {
        id: 2,
        country: 'China',
        children: ['Panasonic', 'Samsung', 'LG']
      }
    ]
  },
  {
    id: 4,
    title: 'Máy chiếu',
    subcategories: []
  },
  {
    id: 3,
    title: 'Máy tính',
    subcategories: [
      {
        id: 1,
        country: 'VietNam',
        children: []
      },
      {
        id: 2,
        country: 'China',
        children: ['Panasonic', 'Samsung', 'LG']
      }
    ]
  }
];

const DropdownMenu = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Danh sách menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.ItemText>Main Menu</Dropdown.ItemText>
        <Dropdown.Divider />

        {categories.map((categories, index) => {
          return (
            <Dropdown key={index}>
              <SplitButton
                key={'end'}
                drop={'end'}
                variant="success"
                title={categories.title}
                style={{
                  width: '100%'
                }}
              >
                {categories.subcategories.length > 0 ? (
                  categories.subcategories.map((sub, index) => (
                    <Dropdown key={index}>
                      <SplitButton
                        key={'end'}
                        drop={'end'}
                        variant="success"
                        title={sub.country}
                        style={{
                          width: '100%'
                        }}
                      >
                        {sub.children.length > 0 ? (
                          sub.children.map((item, index) => {
                            return (
                              <Dropdown.Item key={index}>{item}</Dropdown.Item>
                            );
                          })
                        ) : (
                          <Dropdown.Header>nodata</Dropdown.Header>
                        )}
                      </SplitButton>
                    </Dropdown>
                  ))
                ) : (
                  <Dropdown.Header>nodata</Dropdown.Header>
                )}
              </SplitButton>
            </Dropdown>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
