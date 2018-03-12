const prefixActions = (actionObject, prefix) => {
    Object
        .keys(actionObject)
        .forEach((action, i) => {
            actionObject[action] = `${prefix}/${i}`;
        });
    return actionObject;
};

export default prefixActions;

