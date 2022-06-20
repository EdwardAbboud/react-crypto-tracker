import "../css/PaginationBar.css";

export default function PaginationBar(props) {
  return (
    <div className="pagination-bar-container">
      <button
        className="pagination-element pagination-button"
        onClick={props.loadPrev}
        children="Prev"
      />
      <div
        className="pagination-element page-number-display"
        children={`${props.currentPage}/135`}
      />
      <button
        className="pagination-element pagination-button"
        onClick={props.loadNext}
        children="Next"
      />
    </div>
  );
}
