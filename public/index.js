let searchList = [
    {
        Name: "Socket set",
        Description: "Hand tools",
        id: 1,
        img: "socket.jpg",
    },
    {
        Name: "Wrench",
        Description: "Hand tool",
        id: 2,
        img: "wrench.jpg",
    },
    {
        Name: "Screwdrivers",
        Description: "Hand tools",
        id: 3,
        img: "screwdriver.jpg",
    },
    {
        Name: "Pliers",
        Description: "Hand tools",
        id: 4,
        img: "Pliers.jpg",
    },
    {
        Name: "Hammer",
        Description: "Hand tools",
        id: 5,
        img: "Hammer.jpg",
    },{
        Name: "Impact wrench",
        Description: "Power tools",
        id: 6,
        img: "Impact_wrench.jpg",
    },{
        Name: "Drill",
        Description: "Power tools",
        id: 7,
        img: "Drill.jpg",
    },{
        Name: "Angle grinder",
        Description: "Power tools",
        id: 8,
        img: "Angle_grinder.jpg",
    },{
        Name: "Heat gun",
        Description: "Power tools",
        id: 9,
        img: "Heat_gun.jpg",
    },{
        Name: "Air compressor",
        Description: "Power tools",
        id: 10,
        img: "Air_compressor.jpg",
    },{
        Name: "OBD-II scanner",
        Description: "Diagnostic tools",
        id: 11,
        img: "OBD-II_scanner.jpg",
    },{
        Name: "Multimeter",
        Description: "Diagnostic tools",
        id: 12,
        img: "Multimeter.jpg",
    },{
        Name: "Test light",
        Description: "Diagnostic tools",
        id: 13,
        img: "Test_light.jpg",
    },{
        Name: "Compression tester",
        Description: "Diagnostic tools",
        id: 14,
        img: "Compression_tester.jpg",
    },{
        Name: "Vacuum gauge",
        Description: "Diagnostic tools",
        id: 15,
        img: "Vacuum_gauge.jpg",
    },{
        Name: "Car jack",
        Description: "Lifting tools",
        id: 16,
        img: "Car_jack.jpg",
    },{
        Name: "Jack stand",
        Description: "Lifting tools",
        id: 17,
        img: "Jack_stand.jpg",
    },{
        Name: "Creeper",
        Description: "Lifting tools",
        id: 18,
        img: "Creeper.jpg",
    },{
        Name: "Wheel chocks",
        Description: "Lifting tools",
        id: 19,
        img: "Wheel_chocks.jpg",
    },{
        Name: "Brake bleeder kit",
        Description: "Automotive tools",
        id: 20,
        img: "Brake_bleeder_kit.jpg",
    },{
        Name: "Timing light",
        Description: "Automotive tools",
        id: 21,
        img: "Timing_light.jpg",
    },{
        Name: "Spark plug socket",
        Description: "Automotive tools",
        id: 22,
        img: "Spark_plug_socket.jpg",
    },{
        Name: "Oil filter wrench",
        Description: "Automotive tools",
        id: 23,
        img: "Oil_filter_wrench.jpg",
    },{
        Name: "Gloves",
        Description: "Safety gear",
        id: 24,
        img: "Gloves.jpg",
    },{
        Name: "Safety glasses",
        Description: "Safety gear",
        id: 25,
        img: "Safety_glasses.jpg",
    },{
        Name: "Fire Extinguisher",
        Description: "Safety gear",
        id: 26,
        img: "Fire_Extinguisher.jpg",
    },
]

const input = document.getElementById('input')

input.addEventListener('input', ()=>{
    addSearch();
})

function addSearch(){
    const parent = document.getElementById('search')
    const inputValue = input.value.toLowerCase()
    // console.log(inputValue)
    parent.innerHTML = ''

    let filterList;

    filterList = searchList.filter(function(list){
        return list.Name.toLowerCase().includes(inputValue) || list.Description.toLowerCase().includes(inputValue)
    }
    )

    if(inputValue!=''){
        filterList.forEach(list => {
            const div = document.createElement('div')
            div.innerHTML = `<div class="innerSearch" style="display: flex; align-items: center; margin-top: 5px;">
                        <img src=${list.img} style="margin-right: 10px; width: 40px; height: 40px;" alt="">
                        <p>${list.Name}</p>
                    </div> `
            parent.append(div)
        });
    }
}
