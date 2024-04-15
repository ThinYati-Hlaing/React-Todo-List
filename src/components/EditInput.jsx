import React, { useEffect, useRef } from 'react'

const EditInput = (props) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <input
                type="text"
                className="border border-cyan-900 rounded-sm text-xs py-1 px-2"
                value={props.newJob}
                ref={inputRef}
                onChange={props.handleNewJobInput}
                onKeyUp={props.handleNewJobInputUpdate}
                onBlur={props.handleOnBlur}
            />
        </div>
    )
}

export default EditInput