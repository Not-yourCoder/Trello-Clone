import React, { useEffect } from "react";
import BasicCard from "../cards/TrelloCard";
import { connect } from 'react-redux';
import {getCardData} from "../../store/actions"

const mapStateToProps = (state) => ({
  cards: state.cards
});

const mapDispatchToProps = {
  getCardData
};

const Dashboard = (props) => {
  const {cards,getCardData} = props;

  useEffect(() => {
    getCardData();
  },[getCardData]);

  return (
    <div className="w-100% flex m-4">
      <BasicCard />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
