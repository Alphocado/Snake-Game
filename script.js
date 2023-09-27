// const papan = [
//   ['0-0', '0-1', '0-2', '0-3', '0-4', '0-5', '0-6', '0-7', '0-8'],
//   ['1-0', '1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8'],
//   ['2-0', '2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8'],
//   ['3-0', '3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7', '3-8'],
//   ['4-0', '4-1', '4-2', '4-3', '4-4', '4-5', '4-6', '4-7', '4-8'],
//   ['5-0', '5-1', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7', '5-8'],
//   ['6-0', '6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '6-7', '6-8'],
//   ['7-0', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '7-7', '7-8'],
//   ['8-0', '8-1', '8-2', '8-3', '8-4', '8-5', '8-6', '8-7', '8-8'],
// ];

// const emptyPapan = [
//   [, , , , , , , , ],
//   [, , , , , , , , ],
//   [, , , , , , , , ],
//   [, , , , , , , , ],
//   [, , , , , , , , ],
//   [, , , , , , , , ],
//   [, , , , , , , , ],
//   [, , , , , , , , ],
//   [, , , , , , , , ],
// ]
// const numX = 84;
// const numY = 48;
const numX = 17;
const numY = 17;
const delaySnake = 100; // miliseconds

// Initialize papan and emptyPapan arrays
const papan = [];
const emptyPapan = [];

for (let i = 0; i < numY; i++) {
  const rowPapan = [];
  const rowEmptyPapan = [];

  for (let j = 0; j < numX; j++) {
    const cell = `${i}-${j}`;
    rowPapan.push(cell);
    rowEmptyPapan.push(undefined); // Use undefined for empty cells
  }

  papan.push(rowPapan);
  emptyPapan.push(rowEmptyPapan);
}

let xBaru, yBaru;
// ekor
let ekor = [];

const xLength = papan[0].length;
const yLength = papan.length;



// posisi tengah
let x = Math.floor(papan[0].length / 2);
let y = Math.floor(papan.length / 2);
let posisiTengah = papan[x][y];
ekor.push(papan[x][y]);
// console.log(papan[x][y]);
let looping;
let point = 0;
let hitWall = false;
let hitSelf = false;
let posisi;
// random buah
let yBuah, xBuah;
let arrow;

document.getElementById(x+'-'+y).classList.add("ular");
emptyPapan[x][y] = "Ular";


// memasikan jika awal spawn buah tidak pada user ular
let randomLoop1 = true;
while(randomLoop1){
  yBuah = Math.floor(Math.random() * papan[0].length);
  xBuah = Math.floor(Math.random() * papan.length);
  // console.log(xBuah + '-' + yBuah);
  if(emptyPapan[xBuah][yBuah] !== "Ular"){
    // meletakan buah di papan memory
    emptyPapan[xBuah][yBuah] = "Buah";
    randomLoop1 = false;
  }
}

// menampilkan buah di papan
let lokasiBuah = papan[xBuah][yBuah];
document.getElementById(lokasiBuah).classList.add("buah");

[xBaru, yBaru] = lokasiBuah.split('-');
// console.log(lokasiBuah);


// kiri = 37
// bawah = 38 
// kanan = 39
// atas = 40

let respondToKeyboardInput = true;

document.onkeydown = (e)=> {
  if (!respondToKeyboardInput) {
    return;
  }
  if(
    (!(e.keyCode == 40 && arrow == 38) && !(e.keyCode == 38 && arrow == 40)) &&
    (!(e.keyCode == 37 && arrow == 39) && !(e.keyCode == 39 && arrow == 37)) &&
    !(e.keyCode == arrow)
  ){
    arrow = e.keyCode;
  }

  if(arrow === 37 || arrow === 38 || arrow === 39 || arrow === 40){
    if(looping !== null || looping !== undefined){
      clearInterval(looping);
    }
    hitWall = false;
    hitSelf = false;

    // kiri
    if(arrow === 37) {
      looping = setInterval(() =>{

        x = x - 1;
        template();
        updateEkor(posisi);
        
        if(hitWall){
          clearInterval(looping);
          respondToKeyboardInput = false;
          return;
        } else if(hitSelf){
          clearInterval(looping);
          respondToKeyboardInput = false;
          return;
        }
      }, delaySnake);
    } 

    // bawah
    else if (arrow === 38){
      looping = setInterval(() => {
        
        y = y - 1;
        template();
        updateEkor(posisi);
        unsi
        
        if(hitWall){
          clearInterval(looping);
          respondToKeyboardInput = false;
          alasanMati = 1;
          return;
        } else if(hitSelf){
          clearInterval(looping);
          respondToKeyboardInput = false;
          alasanMati = 0;
          return;
        }

      }, delaySnake);
    } 

    // kanan
    else if (arrow === 39){
      looping = setInterval(() => {

        x = x + 1;
        template();
        updateEkor(posisi);
        
        if(hitWall){
          clearInterval(looping);
          respondToKeyboardInput = false;
          alasanMati = 1;
          return;
        } else if(hitSelf){
          clearInterval(looping);
          respondToKeyboardInput = false;
          alasanMati = 0;
          return;
        }

      }, delaySnake);
    } 

    // atas
    else if (arrow === 40){
      looping = setInterval(() => {

        y = y + 1;
        template();
        updateEkor(posisi);

        if(hitWall){
          clearInterval(looping);
          respondToKeyboardInput = false;
          alasanMati = 1;
          return;
        } else if(hitSelf){
          clearInterval(looping);
          respondToKeyboardInput = false;
          alasanMati = 0;
          return;
        }

      }, delaySnake);
    } 
  }
}


function updateEkor(newVal) {
  
  // ubah semua background jadi putih dulu
  // Get a reference to the table element
  const table = document.getElementById("myTable");

  // Loop through all the rows and cells in the table
  const rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    for (let j = 0; j < cells.length; j++) {
      // Determine whether the cell is odd or even based on its row and column index
      const isOddRow = i % 2 === 0;
      const isOddColumn = j % 2 === 0;

      // Apply the appropriate class to the cell
      if (isOddRow && isOddColumn) {
        cells[j].style.backgroundColor= "#A2D149";
      } else if (isOddRow || isOddColumn) {
        cells[j].style.backgroundColor= "#AAD851";
      } else {
        cells[j].style.backgroundColor= "#A2D149";
      }
    }
  }


  // ambil yg terakhir
  let ekorTerakhir = ekor.pop();
  // tambah yang baru di awal
  ekor.unshift(newVal);

  [xBaru, yBaru] = ekorTerakhir.split('-');
  emptyPapan[xBaru][yBaru] = "";
  document.getElementById(ekorTerakhir).classList.remove("ular");

  for(let i = 0; i < ekor.length; i++){ 
    document.getElementById(lokasiBuah).classList.add("buah");
    document.getElementById(ekor[i]).classList.add("ular");
    // console.log(ekor);
    [xBaru, yBaru] = ekor[i].split('-');
    emptyPapan[xBaru][yBaru] = "Ular";
  }
  // console.log(emptyPapan);
}

function template(){
  // console.log(papan[x][y]);
  if(x < 0 || x > xLength - 1 || y < 0 || y > yLength - 1){
    hitWall = true; 
    alert("Mati tabrak tembok");
    return hitWall;
  } else if(emptyPapan[x][y] === "Ular"){
    hitSelf = true;
    alert("Mati tabrak diri sendiri");
    return hitSelf;
  }
  
  posisi = papan[x][y];
  if(posisi == lokasiBuah){
    lokasiBuahSebelumnya = lokasiBuah;
    [xBaru, yBaru] = lokasiBuahSebelumnya.split('-');
    
    let randomLoop2 = true;
    while(randomLoop2){
      yBuah = Math.floor(Math.random() * papan.length);
      xBuah = Math.floor(Math.random() * papan[yBuah].length);
      if(emptyPapan[xBuah][yBuah] !== "Ular" && emptyPapan[xBuah][yBuah] !== "Buah"){
        emptyPapan[xBuah][yBuah] = "Buah";
        document.getElementById(xBuah+"-"+yBuah).classList.add("buah");
        lokasiBuah = papan[xBuah][yBuah];
        randomLoop2 = false;
      }
    }
    
    // buah sebelumnya akan dihapus
    document.getElementById(xBaru+"-"+yBaru).classList.remove("buah");
    emptyPapan[xBaru][yBaru] = "";

    point++;
    if(point % 2 == 0){
      ekor.unshift(posisi);
    }
    document.getElementById('point').innerHTML = point;
  }
}