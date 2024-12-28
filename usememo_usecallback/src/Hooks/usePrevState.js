import {useRef,useEffect} from "react";
 //Custom Hook

const usePrevState = (state) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = state;
    }, [state]);

    return ref.current;
};

export default usePrevState;
