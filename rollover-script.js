const lastdate=moment().endOf('month').format("MM-DD-YYYY");
document.getElementById("disclaimer-date").innerHTML = "Offer expires " + lastdate;
