function Side(){
    return(
    <div className="app-side">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            
            <button>&#43;</button>
        </div>

        <div className="app-side-notes">
            <div className="app-side-note">
                <div className="app-side-title">
                    <strong> TITLE</strong>
                    
                </div>
                <p>Note preview</p>

                <small className="note-meta">
                    Last modified at [date[]]
                </small>
            </div>
        </div>
   
   
    </div>

    );

}


export default Side;