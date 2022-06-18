import "../css/PaginationBar.css";

export default function PaginationBar(props) {
  return (
    <div className="paginationbar-container">
      <button
        className="pagination-element pagination-button"
        onClick={props.loadPrev}
        children="Prev"
      />
      <div
        className="pagination-element page-number-display"
        children={props.currentPage}
      />
      <button
        className="pagination-element pagination-button"
        onClick={props.loadNext}
        children="Next"
      />
    </div>
  );
}
