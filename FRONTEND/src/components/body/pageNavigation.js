const PageNavigation = (props) => {
    const { pageChangeHandler, setActivePage, activePage, totalPage } = props;
    let pages = [];
    let endPage = activePage + 2 > totalPage ? totalPage : activePage + 2;
    for (
        let i = activePage - 2 < 1 ? 1 : activePage - 2;
        i < endPage + 1;
        i++
    ) {
        pages.push(
            <div
                className={`pageNum ${activePage === i ? "activePage" : ""}`}
                key={i}
                onClick={() => pageChangeHandler(i)}
            >
                {i}
            </div>
        );
    }
    return (
        <div className="pageNavigation">
            <div className="pageNum" onClick={() => pageChangeHandler(1)}>
                {"<<"}
            </div>
            <div
                className="pageNum"
                onClick={() =>
                    activePage > 1
                        ? pageChangeHandler(activePage - 1)
                        : setActivePage(1)
                }
            >
                {"<"}
            </div>
            {pages}
            <div
                className="pageNum"
                onClick={() =>
                    activePage < totalPage
                        ? pageChangeHandler(activePage + 1)
                        : setActivePage(activePage)
                }
            >
                {">"}
            </div>
            <div
                className="pageNum"
                onClick={() => pageChangeHandler(totalPage)}
            >
                {">>"}
            </div>
        </div>
    );
};

export default PageNavigation;
