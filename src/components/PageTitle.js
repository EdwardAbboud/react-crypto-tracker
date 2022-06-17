import "../css/PageTitle.css";
export default function PageTitle(props) {
  return (
    <div className="page-title">
      <h2>{props.title}</h2>
    </div>
  );
}
