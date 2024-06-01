import React, {Fragment} from "react";

var ActionButtons = function ActionButtons(_ref) {
  var data = _ref.data,
    _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    onClickView = _ref.onClickView,
    onClickUpdate = _ref.onClickUpdate,
    onClickDelete = _ref.onClickDelete,
    onClickComment = _ref.onClickComment,
    viewPermission = _ref.viewPermission,
    updatePermission = _ref.updatePermission,
    deletePermission = _ref.deletePermission,
    commentPermission = _ref.commentPermission,
    _ref$viewClassName = _ref.viewClassName,
    viewClassName = _ref$viewClassName === void 0 ? '' : _ref$viewClassName,
    _ref$updateClassName = _ref.updateClassName,
    updateClassName = _ref$updateClassName === void 0 ? '' : _ref$updateClassName,
    _ref$deleteClassName = _ref.deleteClassName,
    deleteClassName = _ref$deleteClassName === void 0 ? '' : _ref$deleteClassName,
    _ref$commentClassName = _ref.commentClassName,
    commentClassName = _ref$commentClassName === void 0 ? '' : _ref$commentClassName;
  return /*#__PURE__*/React.createElement(Fragment, null, viewPermission && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onClickView(data);
    },
    className: viewClassName + " btn",
    style: styles.view
  }, /*#__PURE__*/React.createElement("i", {
    "class": "gg-eye"
  })), updatePermission && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onClickUpdate(data);
    },
    className: updateClassName + " btn",
    style: styles.update
  }, /*#__PURE__*/React.createElement("i", {
    className: "gg-pen"
  })), deletePermission && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onClickDelete(data);
    },
    className: deleteClassName + " btn",
    style: styles["delete"]
  }, /*#__PURE__*/React.createElement("i", {
    className: "gg-trash"
  })), commentPermission && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onClickComment(data);
    },
    className: commentClassName + " btn",
    style: styles.comment
  }, /*#__PURE__*/React.createElement("i", {
    className: "gg-comment"
  }))));
};

export default ActionButtons;
