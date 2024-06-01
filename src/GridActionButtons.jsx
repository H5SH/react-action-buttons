const GridActionButtons = ({
    data,

    onClickView,
    onClickUpdate,
    onClickDelete,
    onClickComment,
    onClickClaim,

    viewPermission,
    updatePermission,
    deletePermission,
    commentPermission,
    claimPermission,
}) => (
    <>
        {viewPermission && (
            <button
                className='btn btn-icon btn-bg-info btn-active-color-black btn-sm me-1'
                onClick={() => onClickView(data)}
            >
                <i className='bi bi-eye-fill fs-4 px-0'></i>
            </button>
        )}

        {updatePermission && (
            <button
                className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                onClick={() => onClickUpdate(data)}
            >
                <i className='bi bi-pencil-fill fs-4 px-0'></i>
            </button>
        )}

        {deletePermission && (
            <button
                onClick={() => onClickDelete(data)}
                className='btn btn-icon btn-bg-danger btn-active-color-white btn-sm me-1'
            >
                <i className='bi bi-trash-fill fs-4 px-0'></i>
            </button>
        )}
        {claimPermission && (
            <>
                <button
                    onClick={() => onClickClaim(data)}
                    className='btn btn-sm btn-primary me-3'
                >
                    Make Claim
                </button>
            </>
        )}
        {commentPermission ? (
            <>
                <button
                    onClick={() => onClickComment(data)}
                    className='btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1'
                >
                    <i className='bi bi-chat-dots-fill fs-4 px-0'></i>
                </button>
            </>

        ) : null}
    </>
)

export default GridActionButtons