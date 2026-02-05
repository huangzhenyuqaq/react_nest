import React, { FC } from "react";
import styles from './index.module.scss';
import useLoadQuestionData from '../../../hooks/useLoadQuestionData';

const Stat: FC = () => {
  const {loading, data}=useLoadQuestionData()
  return (
    <div>
      {loading ? <p>loading</p> : <p>{(data as any).title}</p>}
    </div>
  );
};  
export default Stat;
