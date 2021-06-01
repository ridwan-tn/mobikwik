import React, { useState } from "react";
import { Card, Navbar, Nav, Image, Button, Container } from "react-bootstrap";
import { AiOutlineSearch, AiFillLike, AiFillDislike } from "react-icons/ai";
import blogdata from "./blogdata";
import Footer from "../footerMain";

function Blogmain() {
  const [postcards] = useState(blogdata);

  return (
    <div className="blogmain">
      <Image
        className="blogfirstimg"
        src="https://blog.mobikwik.com/wp-content/uploads/2020/07/312-x-70.png"
      />
      <p className="blogfirstpara">Who we Are, What we Think, What we Do.</p>
      <p className="blogsecondpara">
        Team MobiKwik | March 30, 2021 — Sticky |{" "}
        <span className="blogsecondpara1"> News</span>
      </p>
      <h5 className="blogsecondhead">Message from the company</h5>
      <button className="likebtn">
        <AiFillLike />
        Like <span style={{ marginLeft: "4px" }}>81</span>{" "}
      </button>
      <p className="blogthirdpara">
        MobiKwik is a Truly Indian Payments App used by 100 Million Indians and
        built by 350 Indians. Since inception, the company has grown primarily
        on the strength of its consumer
      </p>
      <Button className="readbtn" variant="outline-secondary">
        R E A D M O R E
      </Button>

      <div className="row" style={{ marginLeft: "10px" }}>
        {postcards.map((card) => {
          return (
            <Card className="md-4 posts">
              <Card.Img className="postimg" variant="top" src={card.image} />
              <p className="postsp">
                {card.info} <span style={{ color: "blue" }}>{card.info1}</span>
              </p>
              <h6 className="postshead">{card.title}</h6>
              <button className="postbtn">
                <AiFillLike />
                Like <span style={{ marginLeft: "4px" }}>
                  {card.like}{" "}
                </span>{" "}
              </button>
              <p className="postpara">{card.description}</p>
              <Button className="postread" variant="outline-secondary">
                R E A D M O R E
              </Button>
            </Card>
          );
        })}
      </div>
      <Button className="olderpost" variant="primary">
                    OLDER POSTS
      </Button>
              <div style={{ marginLeft: "3em",marginTop:'-5em' }}>
                    <Footer/>
              </div>

    </div>
  );
}

export default Blogmain;
