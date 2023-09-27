import React, {useState, useEffect} from "react";
import styles from "./InviteModal.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { UserType } from "../../../../store/slice/userSlice";

interface Props {
  setModalOpen(id: boolean) : void
}

type friendList = { friend: inviteUnit,
  id:number,
  friendId:number,
  createdAt:string}
type inviteList = { inviteUnit: inviteUnit, 
  id:number,
  friendId:number,
  createdAt:string}
type inviteUnit = {
  id:number,
  friendId:number,
  createdAt:string
}


function InviteModal({setModalOpen}: Props) {

  const userInfo:UserType = useSelector((state:{user:UserType})=>{
    return state.user
  })
  const token = userInfo.accessToken

  const [searchInput, setSearchInput] = useState<string>('')
  const [friendList, setFriendList] = useState<friendList[]>([])
  const [inviteList, setInviteList] = useState<inviteList[]>([])

  const ModalClose = () => {
    setModalOpen(false)
  }

  const ChangeSearchInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
    // console.log(searchInput)
  }

  const AppendInviteList = (friend: inviteUnit) => {
    // 이미 존재하는지 확인
    const isAlreadyAdded = inviteList.some((item) => item.id === friend.id);
  
    if (!isAlreadyAdded) {
      const newInviteUnit: inviteList = {
        inviteUnit: friend,
        id: friend.id,
        friendId: friend.friendId,
        createdAt: friend.createdAt,
      };
      
      const newInviteList = [...inviteList, newInviteUnit];
      setInviteList(newInviteList);
    }
  }
  

  const DeleteUnit = (inviteUnit: object) => {
    const updatedInviteList = inviteList.filter(item => item !== inviteUnit);
    setInviteList(updatedInviteList);
  }

  const WatchSome = () => {
    console.log(friendList)
  }

  useEffect(() => {
    const fetchData = async () => {

      const BASE_URL = 'http://j9d108.p.ssafy.io:9999'
      
      try {
        const res = await axios.get(`${BASE_URL}/api/friend/list`, {
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + token
          }
        });
        console.log('검색결과:', res.data.response.list)
        setFriendList(res.data.response.list)
      }
      catch(err) {
        console.log(err)
      }
    }

    fetchData();
  }, []);

  const InviteMoimFriend = async() => {
    const data = {
      "moimId" : 1,
      "moimType" : 1,
      "invite" : [
        // {
        //     "userId" : 2
        // },
      ]
    }
    try {
      const response = await axios.post(`http://j9d108.p.ssafy.io:9999/api/moim/invite`, data, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + 'token'
        }
      });
      console.log(response.data)
    } catch(error) {
      console.log('error:', error)
    }
  }



  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.toptab}>
          <div className={styles.requesttext}>
            <p style={{color: '#7677E8', borderBottom: '4px solid #7677E8'}}>초대하기</p>
          </div>
        </div>

        <div className={styles.maincontent}>
          <div className={styles.searchbox}>
            <div className={styles.inputgroup}>
              <div className={styles.inputlabel}>
                <h2>전화번호, 이름</h2>
              </div>
              <div className={styles.inputbox}>
                <input type="text" onChange={ChangeSearchInput} value={searchInput}/>
              </div>
            </div>
          </div>
          
          <div className={styles.searchresult}>
          
          </div>

          <div className={styles.friendlist}>
            <div className={styles.friendcontent}>  
              <div className={styles.listlabel}>
                <h2>친구 리스트</h2>
              </div>
              <div className={styles.friendbox}>
                {friendList.length > 0 && friendList.map((friend, index) => (
                  <div className={styles.friendunit} onClick={() => AppendInviteList(friend)} key={index}>
                    {friend.friendId} {friend.id}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.invitelist}>
            <div className={styles.invitecontent}>  
              <div className={styles.listlabel}>
                <h2>초대 리스트</h2>
              </div>
              <div className={styles.invitebox}>
              {inviteList.length > 0 && inviteList.map((inviteUnit, index) => (
                  <div className={styles.inviteunit} key={index} onClick={() => DeleteUnit(inviteUnit)}>
                    {inviteUnit.friendId} {inviteUnit.id}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className={styles.infobtns}>
          <button onClick={WatchSome}>aaa</button>
          <button onClick={ModalClose}>닫기</button>
          <button onClick={InviteMoimFriend}>수정하기</button>
        </div>

      </div>
    </div>
  );
}

export default InviteModal;