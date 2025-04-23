//pangram;
let s="thequickbrownfoxjumpsoverthelazydog";
let set=new Set();
for(let i=0;i<s.length;i++){
    let ch=s.charAt(i);
    set.add(ch);
}
if(set.size==26) console.log('is pangram');
else console.log('not ');


//hello
