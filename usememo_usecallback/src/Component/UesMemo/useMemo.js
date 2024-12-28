import React from "react";

const UseMemo= (term) => {
    console.log("hello from used memo")
    return <div>
        Hello 
    </div>;
}

export default React.memo(UseMemo);  //Using memo for performance and prevent create new variable and re-render when props change only