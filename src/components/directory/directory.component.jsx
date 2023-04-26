import './directory.styles.scss'
import CategoryItem from '../category-item/category-item.compinent';

export default function Directory({categories}) {
  return (
    <div>
      <div className="directory-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
