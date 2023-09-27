import { Route, Routes } from "react-router-dom";

// home tap & user
import HomePage from './pages/webmain/Home/Home'
import AccountInfoPage from "./pages/webmain/AccountInfo";
import SigninPage from './pages/webmain/Signin/Signin'
import SignupTempPage from "./pages/webmain/SignupTemp";
import SendMoneyFirstPage from "./pages/webmain/SendMoneyFirst";
import SendMoneySecondPage from "./pages/webmain/SendMoneySecond";
import SuccessPage from "./pages/webmain/SuccessPage";
import ErrorPage from "./pages/webmain/ErrorPage";
import SignUpFirstPage from "./pages/webmain/SignUpFirst";
import SignUpSecondPage from "./pages/webmain/SignUpSecond";
import CallAccountPage from "./pages/webmain/CallAccount";


// search
import SearchPage from './pages/search/Search/Search' 


// dondoc tap
import MoimHomePage from './pages/moim/MoimHome/MoimHome'
import CreateMoimPage from './pages/moim/CreateMoim/CreateMoim'
import MoimLinkAccountPage from './pages/moim/MoimLinkAccount/MoimLinkAccount'
import MoimSelectAccountPage from './pages/moim/MoimSelectAccount/MoimSelectAccount'
import CreateResultPage from './pages/moim/CreateResult/CreateResult'
import MoimJoinPage from './pages/moim/MoimJoin/MoimJoin'


// mission tap
import MissionPage from './pages/mission/Mission/Mission'


// profile tap
import MypagePage from './pages/mypage/Mypage/Mypage' 
import SettingPage from './pages/mypage/Setting/Setting' 
import ChangePasswordPage from './pages/mypage/ChangePassword/ChangePassword' 
import AccountListPage from './pages/mypage/AccountList/AccountList' 
import ChangeCharacterPage from './pages/mypage/ChangeCharacter/ChangeCharacter' 
import DiffProfilePage from './pages/mypage/DiffProfile/DiffProfile' 
import FriendListPage from './pages/mypage/FriendList/FriendList'


//moim detail
import DetailMain from './pages/moimdetail/DetailMain/DetailMain'
import DetailFirst from './pages/moimdetail/DetailFirst/DetailFirst'
import DetailSecond from './pages/moimdetail/DetailSecond/DetailSecond'
import DetailThird from './pages/moimdetail/DetailThird/DetailThird'

function Router() {

    return (
        <Routes>
            {/* user */}
            <Route path="/signin" element={<SigninPage/>}/>
            <Route path="/signupfirst" element={<SignUpFirstPage/>}/>
            <Route path="/signupsecond" element={<SignUpSecondPage/>}/>
            <Route path="/signupTemp" element={<SignupTempPage/>}/>
            
            {/* home tap */}
            <Route path="/" element={<HomePage/>}/>
            <Route path="/accountInfo" element={<AccountInfoPage/>}/>
            <Route path="/sendmoneyfirst" element={<SendMoneyFirstPage/>}/>
            <Route path="/sendmoneysecond" element={<SendMoneySecondPage/>}/>
            <Route path="/callaccount" element={<CallAccountPage/>}/>
            <Route path="/error" element={<ErrorPage/>}/>
            <Route path="/success" element={<SuccessPage/>}/>


            {/* search */}
            <Route path="/search" element={<SearchPage/>}/>


            {/* dondoc tap */}
            <Route path="/moimhome" element={<MoimHomePage/>}/>
            <Route path="/createmoim" element={<CreateMoimPage/>}/>
            <Route path="/moimlink" element={<MoimLinkAccountPage/>}/>
            <Route path="/moimselect" element={<MoimSelectAccountPage/>}/>
            <Route path="/createresult" element={<CreateResultPage/>}/>
            <Route path="/moimjoin" element={<MoimJoinPage/>}/>


            {/* mission tap */}
            <Route path="/mission/:userId" element={<MissionPage/>}/>


            {/* profile tap */}
            <Route path="/accountlist" element={<AccountListPage/>}/>
            <Route path="/changepassword" element={<ChangePasswordPage/>}/>
            <Route path="/changecharacter" element={<ChangeCharacterPage/>}/>
            <Route path="/diffprofile" element={<DiffProfilePage/>}/>
            <Route path='/mypage/:userId' element={<MypagePage/>}/>
            <Route path="/setting" element={<SettingPage/>}/>
            <Route path="/friendlist" element={<FriendListPage/>}/>


            {/* moim detail */}
            <Route path="/detailmain/:moimId" element={<DetailMain/>}/>
            <Route path="/detailfirst/:moimId" element={<DetailFirst/>}/>
            <Route path="/detailsecond/:moimId" element={<DetailSecond/>}/>
            <Route path="/detailthird/:moimId" element={<DetailThird/>}/>



            
        </Routes>
    )
}

export default Router