const ActionButtons = ({
    data,

    styles = {},

    onClickView,
    onClickUpdate,
    onClickDelete,
    onClickComment,

    viewPermission,
    updatePermission,
    deletePermission,
    commentPermission,

    viewClassName='',
    updateClassName='',
    deleteClassName='',
    commentClassName='',
}) => (
    <>
        {viewPermission && (
            <button
                onClick={() => onClickView(data)}
                className={`${viewClassName} btn`}
                style={styles.view}
            >
                <i class="gg-eye"></i>
            </button>
        )}

        {updatePermission && (
            <button
                onClick={() => onClickUpdate(data)}
                className={`${updateClassName} btn`}
                style={styles.update}
            >
                <i className='gg-pen'></i>
            </button>
        )}

        {deletePermission && (
            <button
                onClick={() => onClickDelete(data)}
                className={`${deleteClassName} btn`}
                style={styles.delete}
                >
                <i className='gg-trash'></i>
            </button>
        )}
        {commentPermission && (
            <>
                <button
                    onClick={() => onClickComment(data)}
                    className={`${commentClassName} btn`}
                    style={styles.comment}
                >
                    <i className='gg-comment'></i>
                </button>
            </>

        )}
    </>
)

export default ActionButtons