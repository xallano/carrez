var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

var leboncoin = function(req, res){

    //function(){alert("Hello! I am an alert box!");
    //window.location="http://localhost:8081/scrape";

    url_leboncoin = 'https://www.leboncoin.fr/ventes_immobilieres/1085823289.htm?ca=12_s';
    //var url_leboncoin = document.getElementById("url");


    
    var url_meilleursagents = '';

    request(url_leboncoin, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

        var prix, ville, codePostal, surface, good;
        //var json = { prix : "", ville : "", codePostal : "", surface : ""};


        prix = $("[class='item_price clearfix'] .value").text();
        prix = prix.replace ( /[^\d.]/g, '' );

        ville = $("[itemprop='address']").text();
        codePostal=ville.replace ( /[^\d.]/g, '' );
        ville=ville.replace ( /[^\A-Z,a-z]/g, '').toLowerCase();

        surface = $("#adview > section > section > section.properties.lineNegative > div:nth-child(9) > h2 > span.value").html();
        surface = surface.replace("<sup>2</sup>", "").replace ( /[^\d.]/g, '' );

        good = $("#adview > section > section > section.properties.lineNegative > div:nth-child(7) > h2 > span.value").text();
       
        var json = { 'prix' : prix, 'ville' : ville, 'codePostal' : codePostal, 'surface' : surface, 'good' : good};

        url_meilleursagents = 'https://www.meilleursagents.com/prix-immobilier/'+ville+'-'+codePostal+'/';

        console.log(surface);
        console.log(ville);
        console.log(codePostal);
        console.log(prix);
        console.log(good);
        console.log(url_meilleursagents);
        }
        

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

            console.log('fichier json crée !');

        })

        request(url_meilleursagents, function(error, response, html){
            if(!error){
                var $ = cheerio.load(html);

                var prix_appartement_moyen, prix_maison_moyen;

                prix_appartement_moyen = $("#synthese > div.prices-summary.baseline > div.prices-summary__values > div:nth-child(2) > div.small-4.medium-2.columns.prices-summary__cell--median").text();
                prix_appartement_moyen = prix_appartement_moyen.replace ( /[^\d.]/g, '' );

                prix_maison_moyen = $("#synthese > div.prices-summary.baseline > div.prices-summary__values > div:nth-child(3) > div.small-4.medium-2.columns.prices-summary__cell--median").text();
                prix_maison_moyen = prix_maison_moyen.replace ( /[^\d.]/g, '' );

                console.log("appart "+prix_maison_moyen);
                console.log("maison "+prix_appartement_moyen);

                var resultat = (prix/surface);

                if(good=="Appartement")
                {
                    if(resultat>prix_appartement_moyen)
                        res.send("Mauvais plan cet appart !")
                    else res.send("Tu devrais sauter sur le deal !")
                }
                else{
                    if(resultat>prix_maison_moyen)
                        res.send("Mauvais plan cette maison !")
                    else res.send("Tu devrais sauter sur le deal !")
                }
            }
            //res.send('Check your console!')
        });

    });
    
    
}

exports.leboncoin=leboncoin;

/*app.listen('8081')
console.log('Magic happens on port 8081');*/
