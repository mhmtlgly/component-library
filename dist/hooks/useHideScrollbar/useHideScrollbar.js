import { useEffect } from "react";
export var useHideScrollbar = function (_a) {
    var isOpen = _a.isOpen;
    useEffect(function () {
        if (isOpen)
            document.body.style.overflow = "hidden";
        return function () {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);
};
