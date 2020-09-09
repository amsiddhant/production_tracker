import React,{useState,useEffect} from 'react'


const Parent = props => {
    const [profileState, setProfileState] = useState(props);

  useEffect(() => {
    setProfileState(props);
  }, [props]);

  return (
    <div>
      <p>
        <strong>Name: </strong>
        {profileState.result}
      </p>
      <p>
        <strong>Email: </strong>
        {profileState.result}
      </p>
    </div>
  );
  };
  export default Parent