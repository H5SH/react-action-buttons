var GridActionButtons = function GridActionButtons(_ref) {
  var data = _ref.data,
    onClickView = _ref.onClickView,
    onClickUpdate = _ref.onClickUpdate,
    onClickDelete = _ref.onClickDelete,
    onClickComment = _ref.onClickComment,
    onClickClaim = _ref.onClickClaim,
    viewPermission = _ref.viewPermission,
    updatePermission = _ref.updatePermission,
    deletePermission = _ref.deletePermission,
    commentPermission = _ref.commentPermission,
    claimPermission = _ref.claimPermission;
  return /*#__PURE__*/React.createElement(Fragment, null, viewPermission && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-icon btn-bg-info btn-active-color-black btn-sm me-1",
    onClick: function onClick() {
      return onClickView(data);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-eye-fill fs-4 px-0"
  })), updatePermission && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1",
    onClick: function onClick() {
      return onClickUpdate(data);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-pencil-fill fs-4 px-0"
  })), deletePermission && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onClickDelete(data);
    },
    className: "btn btn-icon btn-bg-danger btn-active-color-white btn-sm me-1"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-trash-fill fs-4 px-0"
  })), claimPermission && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onClickClaim(data);
    },
    className: "btn btn-sm btn-primary me-3"
  }, "Make Claim")), commentPermission ? /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onClickComment(data);
    },
    className: "btn btn-icon btn-bg-success btn-active-color-white btn-sm me-1"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chat-dots-fill fs-4 px-0"
  }))) : null);
};

module.exports = GridActionButtons;
//# sourceMappingURL=index.js.map
