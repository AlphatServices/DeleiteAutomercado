import "./Category.css";

interface MyCategoryProps {
  title: string;
}

function Category({ title }: MyCategoryProps) {
  return (
    <div className="circle-item">
      <div className="circle">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Category;
