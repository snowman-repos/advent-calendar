import React from "react"

export default ({isLoading}) => <div>
    {isLoading?<div className="c-loading">
      <div className="c-loading__content"></div>
    </div>:null}
</div>