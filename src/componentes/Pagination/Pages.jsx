/* eslint-disable react/prop-types */


const Pages = ({ data, handlePrevPage, handleNextPage }) => {
    return (
        <>
            <div className="pages">
                <button disabled={data.previous == null} onClick={handlePrevPage}><i className="bi bi-arrow-left-square-fill"></i>  Anterior</button>
                <button disabled={data.next == null} onClick={handleNextPage}>Siguiente <i className="bi bi-arrow-right-square-fill"></i></button>
            </div>
        </>
    );
};

export default Pages;