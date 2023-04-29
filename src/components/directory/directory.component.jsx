import './directory.styles.scss'
import DirectoryItem from '../directory-item/directory-item.compinent';

export default function Directory({categories}) {
  return (
    <div>
      <div className="directory-container">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
