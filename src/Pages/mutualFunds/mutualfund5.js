import React,{ Component, useState,useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from 'react-bootstrap/Tabs';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Tab from 'react-bootstrap/Tab';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Avatar } from "@material-ui/core";
import mutualfund208 from '../assets/mutualfund208.png'
import mutualfund209 from '../assets/mutualfund209.png'
import mutualfund210 from '../assets/mutualfund210.png'
import mutualfund211 from '../assets/mutualfund211.png'
import mutualfund212 from '../assets/mutualfund212.png'
import mutualfund213 from '../assets/mutualfund213.png'
import mutualfund214 from '../assets/mutualfund214.png'
import mutualfund215 from '../assets/mutualfund215.png'
import mutualfund216 from '../assets/mutualfund216.png'
import mutualfund218 from '../assets/mutualfund218.png'
import mutualfund219 from '../assets/mutualfund219.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  }
  
  const useStyles = makeStyles(theme=>({
    option: {
      fontSize: 25,
      '& > span': {
        marginRight: 10,
        fontSize: 40,
      },
    },
    imagecontiner1: {
      backgroundImage:`url(${mutualfund208})`,
      '&:hover': {
        color: '#FFFFFF',
        opacity: 5,
        backgroundSize: "1000px",
        width:"400px",
        height:'300px'
        
      },
      marginTop:"50px",
      backgroundRepeat:'no-repeat',
      backgroundPosition:"center",
      width:400,
      height:"300px",
     
      [theme.breakpoints.down("sm")]:{
        backgroundSize: "400px",
        paddingLeft:"1.5em",
        paddingRight:"1.5em",
        fontSize:'20px',
        width:'200px',
        height:'150px',
        display:"flexDirection"
      },
    
    },
    imagecontiner2: {
      backgroundImage:`url(${mutualfund209})`,
      '&:hover': {
        color: '#FFFFFF',
        opacity: 5,
        backgroundSize: "1000px",
        width:"400px",
        height:'300px'
        
      },
      marginTop:"50px",
      backgroundRepeat:'no-repeat',
      backgroundPosition:"center",
      width:400,
      height:"300px",
     
     
      [theme.breakpoints.down("sm")]:{
        backgroundSize: "400px",
        paddingLeft:"1.5em",
        paddingRight:"1.5em",
        fontSize:'20px',
        width:'200px',
        height:'150px',
        display:"flexDirection"
      },
    
    },
    Discription5:{
      color:"white",
      fontSize:30,
      fontWeight:"bolder",
      marginLeft:"100px",
      [theme.breakpoints.down("sm")]:{
        fontSize:15,
        fontWeight:"bolder",


      },
    },
    Discription6:{
      color:"white",
      fontSize:20,
      fontWeight:"bolder",
      marginLeft:"100px",
      [theme.breakpoints.down("sm")]:{
        fontSize:25,
        fontWeight:"bolder",

      },
    },
    imagecontiner4: {
      backgroundImage:`url(${mutualfund210})`,
      '&:hover': {
        color: '#FFFFFF',
        opacity: 5,
        backgroundSize: "1000px",
        width:"400px",
        height:'300px'
      },
      width:400,
      height:"300px",
      
      [theme.breakpoints.down("sm")]:{
        paddingLeft:"1.5em",
        paddingRight:"1.5em",
        fontSize:'20px',
        width:'200px',
        height:'150px',
        display:"flexDirection"
      },
    },
    missionStatement:{
      paddingTop:20,
      fontWeight:'bolder',
      fontSize:"30px",
      color:'black',
  
      [theme.breakpoints.down("md")]:{
       width:'100%',
       paddingLeft:"1.5em",
       paddingRight:"1.5em",
      },
  
      [theme.breakpoints.down("sm")]:{
        paddingLeft:"1.5em",
        paddingRight:"1.5em",
        width:'100%',
      },
  
      [theme.breakpoints.down("xs")]:{
        paddingLeft:"1em",
        paddingRight:"1em",
        width:'100%',
        fontSize:"1em",
      }
    },
    Discription:{
      paddingTop:20,
      
      fontSize:"15px",
      color:'black',
  
      [theme.breakpoints.down("md")]:{
       width:'100%',
       paddingLeft:"1.5em",
       paddingRight:"1.5em",
      },
  
      [theme.breakpoints.down("sm")]:{
        paddingLeft:"1.5em",
        paddingRight:"1.5em",
        fontSize:'20px',
        width:'100%',
      },
  
      [theme.breakpoints.down("xs")]:{
        paddingLeft:"1em",
        paddingRight:"1em",
        width:'100%',
        fontSize:".7em",
      }
    },
    Discription1:{
      paddingTop:20,
      fontWeight:"bolder",
      fontSize:"15px",
      color:'black',
    
      [theme.breakpoints.down("md")]:{
       width:'100%',
       paddingLeft:"1.5em",
       paddingRight:"1.5em",
      },
  
      [theme.breakpoints.down("sm")]:{
        paddingLeft:"1.5em",
        paddingRight:"1.5em",
        fontSize:'20px',
        width:'100%',
        textalign:"center",
        display:"flexDirection"
      },
  
      [theme.breakpoints.down("xs")]:{
        paddingLeft:"1em",
        paddingRight:"1em",
        width:'100%',
        fontSize:".7em",
      }
    },
    imagecontainer2:{
      backgroundImage:`url(${mutualfund210})`,
      '&:hover':{
        color:"",
        opacity:5,
        backgroundSize:'950px',
      }
    }
  }));
  
export default function Mutualfund5(){
    const classes = useStyles();

    <style>
        
    </style>
    return(
        <div>
            <Grid item container justify="left">
                <Grid  style={{marginTop:"100px",marginLeft:"100px"}}>
                <h3 className={classes.missionStatement}>
                What is a mutual Fund?
                </h3>
                </Grid>
                <Grid  item xs={10}style={{marginTop:"50px",marginLeft:"100px"}}>
                    <Typography className={classes.Discription}>
                    Mutual Funds are investment vehicles created by collecting money from several investors, and then using these funds to invest in 
                    securities such as stocks, debts, bonds, and other monetary instruments and assets. They are managed by the professional asset managers who have deep 
                    skills and perspectives on the functioning of the investment markets.

Once you invest in a Mutual Fund, you don’t have to bother with monitoring the market constantly, 
or deciding where to invest into. Each Mutual Fund has its prospectus, which states the investment 
target of the fund —
 and that’s what the fund managers aim at achieving.

The value of a Mutual Fund is denoted by its Net Asset Value, i.e. the average of the total value of all 
the securities held by the fund. But NAV of a fund is 
calculated on a daily basis so may not be the best measure for gauging the performance of a fund, instead one 
should study the returns on the investment given over a year or a longer period in which the fund has been active.
                    </Typography>
                </Grid>
                
            </Grid>
            <Grid item container justify="center" spacing={5} style={{marginTop:"50px",marginLeft:"100px"}} >
                       <Grid  item md={6} xs={6}>
                       <h1 className={classes.missionStatement}>
            Types of Mutual Funds
                </h1>
                       </Grid>
                       <Grid style={{float:"left"}}>
                      
                       <h1 className={classes.missionStatement}>
                       Recent News
                </h1>

                       </Grid>
                     </Grid>
            
           
            <Grid item container style={{marginLeft:"100px"}}>
            <Grid item  md={8}>
                <Tabs className={classes.missionStatement} style={{borderWidth:"5px"}}
                >
  <Tab eventKey="home" title="Equity"  >
      <Grid item md={12}>
    <Typography className={classes.Discription}>
    An Equity mutual Fund is a Mutual Fund which invests predominantly in shares/stocks of companies. Equity funds may be further in terms of market capitalization of the 
    <br/>
    companies the fund is investing in- Large cap, mid cap, small cap or micro-cap funds. Equity Funds may be either Active or Passive.  In case an Active Fund, a fund manager will actively be on the lookout for opportunities to invest by conducting 
    <br/>research on companies, keeping a track of the market and examining performance both past and present. In a Passive Fund, the fund manager builds a portfolio that mirrors a popular market index, say Sensex or Nifty Fifty.
    <br/>
Equity funds can also be Diversified or Sectoral / Thematic. A diversified equity scheme
 invests in stocks across the entire market spectrum, a sectoral/ thematic scheme is restricted
  to only a particular sector or theme, say, Real Estate or Information & Technology etc.
<br/>
An equity mutual fund generally produces higher returns than other fund categories but also 
carries more risk.

Equity schemes act as long-term wealth builders and form a very important part of your investment 
portfolio. Paired with debt or balanced funds, they are at the crux of an ideal diversified investment plan.
</Typography>
</Grid>
   
  </Tab>
  <Tab eventKey="profile" title="Balaced">
  <Grid item md={9}>
    <Typography className={classes.Discription}>
    Balanced funds are a type of Hybrid mutual funds. Hybrid schemes give investors a taste of two fund types in one- Equity and Debt. Hybrid schemes invest in two or more asset categories so that the investor can avail the benefit of both.

Balanced funds thus allow an investor to diversify even without having too many fund schemes in their portfolio. The prime goal of Balanced funds is to both appreciate long term wealth while also generating short term income.

Different types of hybrid funds follow different asset allocation strategies.

Balanced funds are the most popular type of hybrid funds. Balanced funds invest at least 65% of their portfolio in equity and equity-oriented instruments. This allows them to qualify as equity funds for the purpose of taxation. Capital gains above Rs 1 lakh from balanced funds held for a period of over 
1 year are taxable at the rate of 10%.

The remaining fund assets are invested in debt securities and some amount might also be kept in cash. Conservative investors looking to benefit from the return-earning capacity of equities without taking too many risks are ideal for balanced funds. The fixed income exposure of balanced funds helps in mitigating equity-related risks.
</Typography>
</Grid>
  </Tab>
  <Tab eventKey="Debt" title="Debt" >
  <Grid item md={9}>
    <Typography className={classes.Discription}>
    Debt mutual funds also called Income Funds or Bond Funds are funds which invest in fixed income instruments. These fixed income instruments could be Corporate and Government Bonds, corporate debt securities, or money market instruments etc. that offer capital appreciation Debt funds offer various advantages when compared to other fund types. Their low-cost structure, relative stability in returns, high liquidity and relative safety are some of their most attractive propositions.

Debt funds are ideal for those investors who aim for regular income but are risk-averse. Debt funds are less volatile and, hence, are less risky than equity funds.

Debt funds are more tax efficient since only the capital gains are taxed. Short term capital gains are taxed at IT slabs only if the units are held for less than 3 years. Post that period Long term capital gains is taxed at 20% and that too only on the component of the gain exceeding indexation.

For investors who are used to traditional products like Bank Deposits, and looking for steady, fixed returns with lower volatility, Debt mutual funds could serve as a better alternative. These funds help you achieve your financial goals in a more tax-efficient way and therefore earning better returns.
</Typography>
</Grid>
  </Tab>
  <Tab eventKey="Liquid" title="Liquid" >
  <Grid item md={9}>
    <Typography className={classes.Discription}>
    Liquid Mutual Funds or money market funds are debt mutual fund schemes which invest in cash assets such as treasury bills, certificates of deposit for short investment horizon. Excess cash which may be required again urgently in a few days, weeks or months can be easily invested in Liquid Mutual Fund schemes.

These instruments have a maximum maturity period of 91 days and are considered safe because they mitigate interest rate volatility risk.

The NAV of a Liquid Fund doesn't fluctuate as much as other fund types.

Another usage for Liquid funds is when investors want to stagger investments in Equity Mutual Funds over a period. Money is invested in a liquid fund and systematically transferred to an equity fund every month. The fact that Liquid funds do not carry an exit load means they can be redeemed or transferred very easily.

Liquid funds are also unique as compared to other funds in the debt category with regards to the NAV. The NAV of liquid funds is calculated for 365 days as compared to other debt funds where the NAV is calculated only for business days. The liquidity factor is most attractive for investors in such funds as the redemptions are credited to the bank account on the next working day.
</Typography>
</Grid>
   </Tab>
   <Tab eventKey="Saving" title="ELSS tax saving" >
   <Grid item md={9}>
    <Typography className={classes.Discription}>
    As the name denotes, Equity Linked Savings Schemes (ELSS) or tax saving mutual funds are Mutual Fund investments in equity markets that qualify for tax exemption under Section 80C of the Income Tax Act. A maximum amount of up to ₹1.5 lakh invested in these tax saving Mutual Fund schemes every year, can be deducted from an investor’s total taxable income.

Though other tax saving investment schemes — like the Provident Fund (PF), National Pension Scheme (NPS) and National Savings Certificates (MSC) — exist, an ELSS can offer the highest returns out of all. These higher returns are accompanied by higher risks, as the funds are invested in equity markets and are subject to market forces.

The investments made into an ELSS have a lock-in period of three years, during which the funds can’t be withdrawn. Other Mutual Fund investments don’t have such a lock in period (except for some closed end Mutual Funds).

An investment can be made once in a lump sum, or even at regular intervals after signing up for a Systematic Investment Plan (SIP).

The investments are subject to market risks, as funds are invested in the equity market. The returns are not guaranteed by the government.
</Typography>
</Grid>
   </Tab>
   <Tab eventKey="Index" title="Index Fund" >
   <Grid item md={9}>
    <Typography className={classes.Discription}>
    An Index fund tracks the performance of an index by buying all the stocks in a particular index in the same proportion as that index, thereby performing in coherence with the index.

Index funds are passively managed funds whereas other mutual funds are actively managed. Index funds are useful if you are looking for long-term investments with very low costs.

Since index funds do not require a lot of effort in terms of fund management the expense ratios associated with them are also lower.

On the other hand, other Mutual funds require the fund manager to keep a close eye on the portfolio performance and make sure that it consistently outperforms the market on various parameters.

Index funds, on the other hand, do not need so much of active management. These funds invest money in a pre-set portfolio of stocks picked according to the investment strategy of the index fund.

An actively-managed fund always acts towards beating its benchmark. On the other hand an index fund’s role is to match its performance to that of its index.
</Typography>
</Grid>
   </Tab>
   <h1>Recent news</h1>
</Tabs>
<h1 className={classes.missionStatement}>
Top 10 Performing Equity Funds
</h1>
<hr style={{marginTop:"40",width:"100%",height:"5px",borderWidth:"",fontWeight:"bolder",backgroundColor:"black"}}/>
<Grid item container className={classes.Discription}>
      <Grid item md={6} xs={6} className={classes.Discription1}>
       Name
       
      </Grid>
      <Grid item md={3} lassName={classes.Discription1} style={{wordSpacing:"30px"}}>
       NAV
       
      
      1Y
       
    
      3Y
       
     
      5Y
       
      </Grid>
      </Grid>
      <hr style={{marginTop:"40px",width:"100%",height:"5px",borderWidth:"",fontWeight:"bolder",backgroundColor:"black"}}/>
      
<Grid item container>
      <Grid item md={6} xs={6} justify="center"className={classes.Discription}>
       <img src={mutualfund211} style={{width:"100px",height:"100px"}}/>
       <a  href="#">nippon india us equit opportunities fund direct growth</a>
      </Grid>
      <Grid item  md={6} xs={6}justify="center"className={classes.Discription1} style={{wordSpacing:"50px"}}>
      ₹26.4818

       
      
      45.68%
       
     
      25.76%
       
      
      21.55%
       
      </Grid>
      </Grid>
      <hr style={{marginTop:"40px",width:"100%",height:"",borderWidth:"",fontWeight:"bolder"}}/>
      <Grid item container>
      <Grid item md={6} xs={6}className={classes.Discription}>
       <img src={mutualfund212} style={{width:"100px",height:"100px"}}/>
       <a href="#">TaTa Digital India fund direct growth</a>
      </Grid>
      <Grid item  md={6} xs={6}className={classes.Discription1} style={{wordSpacing:"50px"}}>
      ₹28.8122
       
     
      98.21%	
       
      
      24.95%	
       
      
      22.70%
       
      </Grid>
      </Grid>
      <hr style={{marginTop:"40px",width:"100%",height:"",borderWidth:"",fontWeight:"bolder"}}/>
      <Grid item container>
      <Grid item md={6} xs={6}className={classes.Discription}>
       <img src={mutualfund213} style={{width:"100px",height:"100px"}}/>
       <a href="#">PGIM India Global Equity Oppertunities fund Direct Plan Growth</a>
      </Grid>
      <Grid item  md={6} xs={6}className={classes.Discription1} style={{wordSpacing:"50px"}}>
      ₹38.68
       
     
      68.81%	
       
      
      33.19%
       
      
      22.65%
       
      </Grid>
      </Grid>
      <hr style={{marginTop:"40px",width:"100%",height:"",borderWidth:"",fontWeight:"bolder"}}/>     
      <Grid item container className={classes.missionStatement}>
      <Grid item md={6} xs={6}className={classes.Discription}>
       <img src={mutualfund214} style={{width:"100px",height:"100px"}}/>
       <a href="#">Franklin India Technology Fund Direct Growth </a>
      </Grid>
      <Grid item  md={6} xs={6}className={classes.Discription1} style={{wordSpacing:"50px"}}>
      ₹299.3201	
       
      
      85.55%		
       
      
      24.73%
       
      
      20.64%
       
      </Grid>
      </Grid>
      <hr style={{marginTop:"40px",width:"100%",height:"",borderWidth:"",fontWeight:"bolder"}}/> 
      <Grid item container>
      <Grid item md={6} xs={6}className={classes.Discription}>
       <img src={mutualfund215} style={{width:"100px",height:"100px"}}/>
       <a href="#">Adithya Birla Sunlife Digital india Fund Direct Plan Growth </a>
      </Grid>
      <Grid item  md={6} xs={6}className={classes.Discription1} style={{wordSpacing:"50px"}}>
      ₹105.45	
       
      
      100.93%			
       
      
      26.06%
       
      
      23.25%
       
      </Grid>
      </Grid>
      <hr style={{marginTop:"40px",width:"100%",height:"",borderWidth:"",fontWeight:"bolder"}}/> 
      <Grid item container>
      <Grid item md={6} xs={6}className={classes.Discription}>
       <img src={mutualfund216} style={{width:"100px",height:"100px"}}/>
       <a href="#">ICICI Prudential Technology Fund Direct Plan Growth </a>
      </Grid>
      <Grid item  md={6} xs={6}className={classes.Discription1} style={{wordSpacing:"50px"}}>
      ₹117.46		
       
      
      116.08%			
       
      
      27.11%
       
     
      22.43%
       
      </Grid>
      </Grid>
      <hr style={{marginTop:"40px",width:"100%",height:"",borderWidth:"",fontWeight:"bolder"}}/>
      <Grid item container>
      <Grid item md={6} xs={6}className={classes.Discription}>
       <img src={mutualfund218} style={{width:"100px",height:"100px"}}/>
       <a href="#">edelweiss Greater China Equity Off Shore Fund Direct Plan Growth </a>
      </Grid>
      <Grid item  md={6} xs={6}className={classes.Discription1} style={{wordSpacing:"50px"}}>
      ₹59.9			
       
      
      61.97%		
       
     
      26.99%	
       
      
      26.60%
       
      </Grid>
      </Grid>
      <hr style={{marginTop:"40px",width:"100%",height:"",borderWidth:"",fontWeight:"bolder"}}/>
      <Grid item container>
      <Grid item md={6} xs={6}className={classes.Discription}>
       <img src={mutualfund216} style={{width:"100px",height:"100px"}}/>
       <a href="#">ICICI Prudential US BlueChip Equity Fund Direct Plan Growth </a>
      </Grid>
      <Grid item  md={6} xs={6}className={classes.Discription1} style={{wordSpacing:"50px"}}>
      ₹46.66			
       
      
      38.91%			
       
     
      23.84%
       
     
      19.27%
       
      </Grid>
      </Grid>
      <hr style={{marginTop:"40px",width:"100%",height:"",borderWidth:"",fontWeight:"bolder"}}/>
      <Grid item container>
      <Grid item md={6} xs={6}style={{float:"left",fontSize:"25px"}}>
       
       <a href="#">View All Equity Funds  </a>
      </Grid>
      
      
      </Grid>
       </Grid>
                 
                <Grid md={4}>
                <Grid className={classes.imagecontiner1}style={{}}>
                    <br/>
                     <Grid >
                     <Typography  varient="h6"className={classes.Discription5}>
                     Browse By Fund Family
                    </Typography>
                     </Grid>
                    
                    <Typography  varient="h6"className={classes.Discription6}>
                     Get information and compare schemes from 36
                     <br/> mutual fund houses
                    </Typography>
                    <Grid item container>
                        <Grid item xs={9} md={9}>
                        <Autocomplete
      id="country-select-demo"
      style={{ width: "100%",height:"65px" ,backgroundColor:"white",marginLeft:"30px",marginTop:"25px",fontSize:'25px'}}
      options={countries}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField 
          {...params}
          
          label ="BNP Pribas"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
        
      )}
    />
                        </Grid>
                        
                        <Grid item xs={2} md={2} style={{marginTop:"25px"}}>
                   
    <Avatar style={{color:"black",backgroundColor:"white", marginLeft:"40px"}}> <ArrowForwardIcon style={{width:"25px",height:"25px"}}/></Avatar>
    </Grid>
    </Grid>
                    </Grid>
                    <Grid className={classes.imagecontiner2}>
                    <br/>
               
                    <Typography  varient="h6"style={{color:"white",fontSize:"25px",marginLeft:"40px",fontWeight:"bolder"}}>
                    One Size Doesn't Fit All
                    </Typography>
                    <Typography  varient="h6"style={{color:"white",fontSize:"20px",marginLeft:"40px"}}>
                     Which Scheme is right for you? our fund finder tool help you pick the fund to fit your exact
                    investment needs
                    </Typography>
                    <button style={{backgroundColor:"white",color:"black",borderRadius:"30px",
                    marginLeft:"25px",marginTop:"25px",fontSize:"20px",fontWeight:"bolder"}}>Lucnch Fund  Finder</button>
                    </Grid>

                    <Grid className={classes.imagecontiner4}>
                    <br/>
               
                    <Typography  varient="h6"style={{color:"white",fontSize:"25px",marginLeft:"40px",fontWeight:"bolder"}}>
                    Search Fund
                    </Typography>
                    <Typography  varient="h6"style={{color:"white",fontSize:"20px",marginLeft:"40px"}}>
                    Get information and compare schemes from 36 mutual fund houses
                    </Typography>
                    <Grid item  md={6}>
                        <Autocomplete
      id="country-select-demo"
      style={{ width: "100%",height:"40px" ,backgroundColor:"white",marginTop:"10px",marginLeft:"20px",fontSize:'10px'}}
      options={countries}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField 
          {...params}
          
          label ="Adithya Birla Sun life"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
        
      )}
    />
                        </Grid>
                        <Grid item md={2} style={{marginTop:"10px",marginLeft:"20px"}}>
                   
    <Avatar style={{color:"black",backgroundColor:"white",}}> <ArrowForwardIcon style={{width:"25px",height:"25px"}}/></Avatar>
    </Grid>
                    </Grid>

                    
                  
                    
                </Grid>
                </Grid>
                <Grid item container style={{marginLeft:'100px',marginTop:"50px",justify:"center"}}>
                  <Grid >
                    <h4 style={{fontWeight:'bolder'}}>How Do Mutual Fund Operate ?</h4>
                    
                  </Grid>
                  <br/>
                  
                </Grid>
                <Grid item container style={{marginTop:"20px",justify:"center",marginLeft:"100px"}}>
                <Grid item xs={10} md={10}>
                  <Typography variant="" gutterBottom style={{}}>
        
                  When you invest in a fund, it is the equivalent of investing in a unit of a company (the value of which is denoted by the NAV). These units that you invest into are essentially like packaged fruit palates. 
                  <br/>One person buys a lot of fruits, cuts them, mixes them, and serves them again in a new cup. Now the unit of the Mutual Fund that you buy is like this fruit cup. A Mutual Fund invests in multiple securities and you buy a mixed basket of securities from them.
<br/>
<br/>
The mixed basket that you buy from the Mutual Fund can have volatile securities — such as equities — or non-volatile securities such as bonds or government certificates. Or it can be a mix of both. This mixed basket reduces the overall risk borne by the investor and cushions the investment against market forces. Itt is managed by a professional investment advisor or fund manager, which further secures the amount invested by you.

What we’ve discussed here is a fairly simplified version of a Mutual Fund scheme. In reality, an Asset Management Company (AMC) would have several Mutual Funds. They would also have an army of managers or advisors to manage these funds, and an analyst to perform market research and chart out the best available investment options. Further, the company will have an accountant to keep an update about the NAV of the fund(s), and a compliance officer to ensure that all the operative regulations are met with.
<br/><br/>
This team, assembled under the umbrella of the fund company is geared to providing the investors with cheapest and the safest investment options which will maximize their client’s investment and multiply it manifolds.
      </Typography>
                    
                  </Grid>
                  <br/>
                  
                  
                </Grid>
                <Grid item container style={{marginLeft:'100px',marginTop:"25px",justify:"center"}}>
                <Grid >
                    <h4 style={{fontWeight:'bolder'}}>Benefits of Investing in Mutual Funds</h4>
                    
                  </Grid>
                  <br/>
                  
                </Grid>
                <Grid item container style={{marginLeft:'100px',marginTop:"50px",justify:"center"}}>
                <Grid >
                    <h2 style={{fontWeight:'bolder'}}>Diversification</h2>
                    
                  </Grid>
                  <br/>
                  
                </Grid>
                <Grid item container style={{marginLeft:'100px',marginTop:"25px",justify:"center"}}>
                <Grid item md={10} >
                <Typography variant="" gutterBottom style={{}}>Diversification is often the most repeated rule of sound investment strategy. Investing in multiple securities and several types of securities cushions the investment from the bad 
                    performance of any one type of asset.</Typography>
                    
                  </Grid>
                  <br/>
                  
                </Grid>
                <Grid item container style={{marginLeft:'100px',marginTop:"50px",justify:"center"}}>
                <Grid >
                    <h5 style={{fontWeight:'bolder'}}>Economies of Scale</h5>
                    
                  </Grid>
                  <br/>
                  
                </Grid>
                <Grid item container style={{marginLeft:'100px',marginTop:"25px",justify:"center"}}>
                <Grid item md={10} xs={10}>
                <Typography variant="" gutterBottom style={{}}>Understanding investment instruments and the market is a fairly 
                difficult task. If you decide to do it on your own, it demands constant monitoring of the markets and involves 
                keeping yourself updated with investment and financial news. Mutual Funds are managed by professional fund 
                managers who are full-time invested in the task of monitoring the market and are well 
                equipped with the know-how of the investment market.</Typography>
                    
                  </Grid>
                  <br/>
                  
                </Grid>
                <Grid item container style={{marginLeft:'100px',marginTop:"50px",justify:"center"}}>
                <Grid >
                    <h2 style={{fontWeight:'bolder'}}>Well-suited to individual needs</h2>
                    
                  </Grid>
                  <br/>
                  
                </Grid>
                <Grid item container style={{marginLeft:'100px',marginTop:"25px",justify:"center"}}>
                <Grid item md={10}>
                <Typography variant="" gutterBottom style={{}}>There are multiple types of Mutual Funds, low-risk funds, 
                funds with aggressive investment plans, balanced funds, etc. There is a full catalog of funds which is available
                 at an investor’s disposal. You can choose as per your investment goal which fund to invest in 
                and then proceed with it.</Typography>
                    
                  </Grid>
                  <br/>
                  
                </Grid>
                <Paper backgroundColor="rgb(247,247,247)" style={{marginTop:'50px'}}>
                 
                 <Grid item container>
      <Grid item md={6} xs={6}style={{float:"left",fontSize:"15px"}}>
       <img src={mutualfund219} style={{width:"350px",height:"125px",marginLeft:"100px"}}/>
      
      </Grid>
      <Grid item md={2} >
     			
       
      </Grid>
      <Grid item md={1} >
     			
       
      </Grid>
      <Grid item md={1} >
      
       
      </Grid>
      <Grid item md={1} xs={1}style={{float:"left",fontSize:"15px",fontWeight:"bolder"}}>
      <FacebookIcon style={{width:"50px",height:'50px'}}/>
      <TwitterIcon style={{width:"50px",height:'50px'}}/>
      <Grid style={{color:"rgb(189,189,189)"}}>
        Terms of Services
      </Grid>
      <Grid style={{color:"rgb(189,189,189)"}}>
       Privacy Policy
      </Grid>
      <Grid style={{color:"rgb(189,189,189)"}}>
       Grievancs
      </Grid>

       
      </Grid>
      </Grid>
      <Grid item conatiner style={{marginLeft:"100px"}}>
        <Grid>
          <Typography variant="h6" gutterBottom style={{fontWeight:'bolder'}}>
          Fund Houses
          </Typography>
          
      <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      ICICI Mutual Fund | HDFC Mutual Fund | Aditya Birla Sun Life Mutual Fund | Nippon India Mutual Fund | SBI Mutual Fund |
      </Typography>
           
      <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      UTI Mutual Fund | Kotak Mahindra Mutual Fund | Franklin Templeton Mutual Fund | DSP Mutual Fund | IDFC Mutual Fund |
      </Typography>
      <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      BNP Paribhas Mutual Fund | Canara Robeco Mutual Fund | PGIM India Mutual Fund | Edelweiss Mutual Fund | HSBC Mutual Fund | Union Mutual Fund |
      </Typography>
      <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      Indiabulls Mutual Fund | L&T Mutual Fund | LIC Mutual Fund | Principal Mutual Fund | IIFL Mutual Fund | Sundaram Mutual Fund |
      </Typography>
      <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      Quantum Mutual Fund | Taurus Mutual Fund | Mirae Asset Mutual Fund | Essel Mutual Fund | PPFAS Mutual Fund | Axis Mutual Fund |
      </Typography>
      <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      IDBI Mutual Fund | Baroda Pioneer Mutual Fund | Tata Mutual Fund | JM financial Mutual Fund | Mahindra Mutual Fund | Motilal Oswal Mutual Fund | Invesco Mutual Fund
      </Typography>
      <Typography variant="" gutterBottom style={{fontWeight:'bolder',marginTop:"25px"}}>
          Fund Houses
          </Typography>
          <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
          Balanced | Debt | ELSS-Tax-Saving | Equity | Index | Liquid
      </Typography>
      <Typography variant="h4" gutterBottom style={{fontWeight:'bolder',marginTop:"25px"}}>
      Calculators
          </Typography>
          <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
          Lumpsum Calculator | SIP Calculator | Direct vs Regular returns Calculator
      </Typography>
      <Typography variant="h4" gutterBottom style={{fontWeight:'bolder',marginTop:"25px"}}>
      Lumpsum
          </Typography>
          <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
          HDFC Mutual Fund Calculator | SBI Mutual Fund Calculator | ICICI Pru Mutual Fund Calculator | Franklin Templeton Mutual Fund Calculator | Nippon India Mutual Fund calculator
           | L&T Mutual Fund Calculator |
      </Typography>
      <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      Kotak Mutual Fund Calculator | Aditya Birla Mutual Fund Calculator | DSP Mutual Fund Calculator | Axis Mutual Fund Calculator | IDFC Mutual Fund Calculator | UTI Mutual Fund Calculator


      </Typography>
          <Typography variant="h4" gutterBottom style={{fontWeight:'bolder',marginTop:"25px"}}>
          SIP
          </Typography>
          <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
          HDFC SIP Calculator | SBI SIP Calculator | ICICI Pru SIP Calculator | Franklin Templeton SIP Calculator | Nippon India SIP calculator | L&T SIP Calculator | Kotak SIP Calculator | 
          Aditya Birla SIP Calculator | DSP SIP
      </Typography>
      <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      Calculator | Axis SIP Calculator | IDFC SIP Calculator | UTI SIP Calculator
      </Typography>
      <Grid item md={10} >
      <Typography variant="" gutterBottom style ={{marginTop:'60px',color:"rgb(189,189,189)"}}>
      Name of Investment Adviser- Harvest Fintech Private Limited | Address- 206, Natwar Chambers, 94, Nagindas Master
       Road, Fort , Mumbai. Phone – 022- 22622060 | Type of Registration- Non-Individual | Registration number- 
       INA 000004773 valid till 23.05.2021 | Principal Officer- Mr. Pradeep Bhasin | Email id- mutualfunds@mobikwik.com
       Phone- 011-61266390 | Corresponding SEBI Local Office Address - Securities and Exchange Board of India, Investment Management Department, 
      Bandra-Kurla Complex Bandra, Mumbai 400051.
      </Typography>
      </Grid>
      <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      Investing involves risks & investments may sometimes lose value. Past performance does not guarantee future returns.
      </Typography>
      <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      © 2021 One Mobikwik System Pvt Ltd, India | All rights reserved. | 2.0.619
      </Typography>
        </Grid>
      </Grid>

                </Paper>
        </div>
    )
}
const countries = [
    { code: 'AD', label: 'axis', phone: '376' },
    { code: 'AE', label: 'Baroda poineer', phone: '971' },
    { code: 'AF', label: 'Adithya birla sunlife', phone: '93' },
    { code: 'AG', label: 'Bnp Pribas', phone: '1-268' },
    { code: 'AI', label: 'HDfc', phone: '1-264' },
    { code: 'AL', label: 'IDFC', phone: '355' },
    { code: 'AM', label: 'ICICI', phone: '374' },
    { code: 'AO', label: 'KOTAK', phone: '244' },
    { code: 'AQ', label: 'L&T FINANCE', phone: '672' },
    { code: 'AR', label: 'NIPPON INDIA', phone: '54' },
    { code: 'AS', label: 'SBT', phone: '1-684' },
    { code: 'AT', label: 'SBI', phone: '43' },
    { code: 'AU', label: 'Australia', phone: '61', suggested: true },
]