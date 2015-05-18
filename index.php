<?php include("./code/php/header.php"); ?>
<?php include("./code/php/nav.php"); ?>   
  
<div id="main_container">
    
   
    <?php include("./code/php/about.php"); ?>
	<?php include("./code/php/calendar.php"); ?>
    
    <div class="container section" id="works" ng-app="outwright">
    
    	<div class="row twelve-cols">
        	 <div class="col-md-5">
        		<h2>Featured Production</h2>
            </div>
        </div>
        
        <div class="row twelve-cols">
  
          	<div class="col-md-4">
            	<div class="feature_description"><em><strong>Under the Influence</strong></em> follows an array of Anitas (Anita Smoke, Anita Drink, Anita Lay) as she sings her way through a variety of vignettes centered on vices and addictions all orchestrated by an Emcee who infiltrates her many incarnations as the enabling antagonist every addict needs. Under the Influence is, on the surface, a campy comedy but underneath the covers it is both a lampooning and lambasting of the inhumane, greed-driven, corporate capitalism that not only perpetuates our addictions, but also invents them.</div>
            </div>
  
              
            
            
            <div class="col-md-4">
                <div class="work" rel="work_ui">
                	<div class="work_image"><img class="img-responsive center-block" src="img/under_the_influence.png"></div>
                    <div class="work_title">Under The Influence</div>
                    <div class="work_type">Featured Production</div>
                </div>
                <!-- This contains the hidden content for inline calls -->
                <div style='display:none'>
                    <div id='work_ui_popup' style='padding:10px; background:#fff;'>
						<div class="popup_top">
                        	<div class="popup_top_left left"><img src="img/under_the_influence.png" width="250" height="250"></div>
                            <div class="popup_top_right left">
                            	<div class="popup_title">Under the Influence</div>
                                <div class="popup_credits">
                                    <span>Book & Lyrics: <a href="http://www.lijoi.com" target="_blank">Ernie Lijoi</a></span><br />
                                    <span>Music: Ernie Lijoi, Kevin Laursen, Lawrence Rush</span><br />
                                    <span>Direction: Rusty Tennant</span><br />
                                    <span>Music Direction: Kevin Laursen</span>
                                </div>   
                                <div class="popup_description">Under the Influence follows an array of Anitas (Anita Smoke, Anita Drink, Anita Lay) as she sings her way through a variety of vignettes centered on vices and addictions all orchestrated by an Emcee who infiltrates her many incarnations as the enabling antagonist every addict needs. Under the Influence is, on the surface, a campy comedy but underneath the covers it is both a lampooning and lambasting of the inhumane, greed-driven, corporate capitalism that not only perpetuates our addictions, but also invents them.</div>                             
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>                
            </div>     
            
            <div class="col-md-4">
                <div class="feature_credits">
                    <span>Book & Lyrics: <a href="http://www.lijoi.com" target="_blank">Ernie Lijoi</a></span><br />
                    <span>Music: Ernie Lijoi, Kevin Laursen, Lawrence Rush</span><br />
                    <span>Direction: Rusty Tennant</span><br />
                    <span>Music Direction: Kevin Laursen</span>
                </div>        
                <div class="feature_ernie"><strong>Ernie Lijoi</strong>, creater of Under the Influence, is a lyrical contributor to the current Broadway hit "It Shoulda Been You" starring Tyne Daly andd directed by David Hyde Pierce which was nominated for several Outer Critics Circle awards including "Best New Score". He is an alumnist of the BMI Lehman Engel Musical Theater Workshop in NYC and has recorded three CDs, the last of which earned him the honor of Billboard's "Unsigned Artist Album of the Year".  His cabaret, jazz, and comedy songs have been heard worldwide including the main stage at Carnegie Hall.</div>
            </div>                    
            

        </div>
            
    	<div class="row twelve-cols">
        	 <div class="col-md-12">
        		<h2>Other Productions and Workshops</h2>
            </div>
        </div>
        
        <div class="row twelve-cols" ng-controller="FestivalControler as festival">
         
         	<div ng-repeat="work in festival.works">         		
         
                <div class="col-md-4">
                
                    <div class="work" rel="work_{{work.popup}}">
                        <div class="work_image"><img class="img-responsive center-block" ng-src="{{festival.imgURL + work.images[0].small}}" width="250" height="250"></div>
                        <div class="work_title">{{work.name}}</div>
                        <div class="work_type">{{work.type}}</div>
                    </div>
                
                    <!-- This contains the hidden content for inline calls -->
                    <div style='display:none'>
                        <div id='work_{{work.popup}}_popup' style='padding:10px; background:#fff;'>
                            <div class="popup_top">
                                <div class="popup_top_left left"><img ng-src="{{festival.imgURL + work.images[0].large}}"></div>
                                <div class="popup_top_right left">
                                    <div class="popup_title">{{work.name}}</div>
                                    <div class="popup_credits" ng-repeat="credit in work.credits">
                                    	<span>{{credit}}</span>
                                    </div>   
                                    <div class="popup_description" ng-bind-html="work.description  | sanitize"></div>                             
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div> 
                                     
                </div>       
            
            </div> 

         </div>
        
    </div>  
    
	<?php include("./code/php/location.php"); ?>

</div>

<?php include("./code/php/footer.php"); ?> 