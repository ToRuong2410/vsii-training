import DropdownButton from 'react-bootstrap/DropdownButton';
import { Category } from './data';
import { Button } from 'react-bootstrap';
import '../styles/dropdown.css';
interface IProps {
  data: Category[] | null;
}

const DropdownListMenu = (props: IProps) => {
  const { data } = props;
  return (
    <>
      {data?.map((category, index) => {
        return category.subCategories && category.subCategories.length > 0 ? (
          <DropdownButton
            key="end"
            id={`dropdown-button-drop-end`}
            drop="end"
            variant="secondary"
            title={`${category.title}`}
            className="drop-down-button"
          >
            {<DropdownListMenu data={category.subCategories} />}
          </DropdownButton>
        ) : (
          <Button
            style={{ width: '100%', marginBottom: '5px' }}
            variant="secondary"
          >
            {category.title}
          </Button>
        );
      })}
    </>
  );
};

export default DropdownListMenu;
