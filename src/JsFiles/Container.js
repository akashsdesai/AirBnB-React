import "./CssFiles/Container.css"
import CardData from "./CardData"
import star from "./images/Star.png"

function Container(){
  const cardElement=CardData.map(item=>{
    return <Card 
      key={item.id}
      val={item}
      /* {...item} */ //this is above line both can be used 
    />
  })
  return(
    <div className="Container">
      {cardElement}
    </div>
  )
}

function Card(props){
  let vacancy
  if(props.val.openSpots===0){ // if object is reated with {...item the instead of props.val.openspot we can directly wright props.openspot}
    vacancy="SOLD OUT"
  }else if(props.val.type==="online"){
    vacancy="ONLINE"
  }
  return(
    <div className="Card">
      {vacancy && <div className="vacancy">{vacancy}</div>}
      <img src={props.val.profile} />
      <div className="rating">
        <img src={star} />
        <p >{props.val.rating}</p>
        <p className="num">({props.val.pep}) &#8226; {props.val.location}</p>
      </div>
      <p className="title">{props.val.title}</p>
      <p className="price"><span className="dark">From ${props.val.price}</span> / person</p>
    </div>
  )
}


/* function Container(){
  return(
    <div className="Container">
      <Card
        profile={img1}
        country="USA"
        pep="6"
        rating="5.0 "
        title="Life lessons with katie Zaferes"
        price="136"
      />
      <Card
        profile={img2}
        pep="30"
        country="USA"
        rating="5.0 "
        title="Life lessons with katie Zaferes"
        price="136"
      />
      <Card
        profile={img3}
        pep="2"
        country="USA"
        rating="4.8 "
        title="Life lessons with katie Zaferes"
        price="136"
      />
      <Card
        profile={img2}
        country="India"
        pep="150"
        rating="2.0 "
        title="Life lessons with katie Zaferes"
        price="136"
      />
   </div>
  )
} */

export default Container