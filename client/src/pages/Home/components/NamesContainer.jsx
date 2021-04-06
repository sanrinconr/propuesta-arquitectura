import { NamesView } from "./NamesView";
import {connect} from "react-redux"
function NamesContainer({users}){
    console.log(users)
    return <NamesView users={users}/>
}

const mapStateToProps = status=>{
    return status
}

export default connect(mapStateToProps)(NamesContainer)