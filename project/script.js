$(document).ready(()=>{
    const openStream = ()=>{
        const config = {audio: true, video:true};
        return navigator.mediaDevices.getUserMedia(config);
    }

    const playStream = (idVideoTag, stream)=>{
        const videotag = document.getElementById(idVideoTag);
        videotag.srcObject = stream;
        videotag.play();
    }


    // openStream()
    // .then(stream=>playStream('localstream', stream));


    var peer = new Peer({key: 'peerjs' , port: 443, secure: true});  //co id thi cho vao (id nay phai la khac nguoi khac nhe), ko thi no lay ngau nhien
    peer.on('open', id=>$('#mypeer').append(id));

//cau hinh nguoi goi:
    $('#btncall').click(()=>{
        const idThangKia = $('#remoteid').val();
        console.log(idThangKia);
        openStream()
        .then(stream=>{
            playStream('localstream', stream); // playstream minh 
            var call = peer.call(idThangKia, stream);
            call.on('stream', (remoteStream) =>{
                playStream('remotestream', remoteStream); 
            });

        });
    });



//cau hinh khi co nguoi khac goi den
peer.on('call', (call) =>{
    openStream()
    .then(stream=>{
        call.answer(stream);
        playStream('localstream', stream); // playstream minh 
        call.on('stream', (remoteStream)=>  playStream('remotestream', remoteStream));
    }, err=>console.log(err));

  });

});
