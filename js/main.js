
      var parameters, gui, panorama, panorama2, viewer, radius, button, position, infospot1,infospot2,infospot3,infospot4, timerId, easingItem, list, listItem, index = 0, baseScale = 300;

      var curves = [], easings = [];

      curves = getPropertyArray( TWEEN.Easing );

      list = document.querySelector( '.mdl-list' );
      listItem = document.querySelector( '.mdl-list__item' );

      // Parametres
      parameters = {
        amount: 50,
        duration: 100000,
        curve: 'Exponential',
        easing: 'Out',
        iterative: false,
      };

      panorama = new PANOLENS.ImagePanorama( 'asset/textures/equirectangular/field.jpg' );
      panorama2 = new PANOLENS.ImagePanorama( 'asset/textures/equirectangular/building.jpg' );

      panorama.link( panorama2, new THREE.Vector3(3883.71, 745.13, -3047.48), 400, 'asset/textures/240px-Font_Awesome_5_solid_arrow-circle-right.svg.png' );
      panorama2.link( panorama, new THREE.Vector3(4602.58, 1863.13, -547.70), 400 );

      const { edgeLength } = panorama;
      radius = edgeLength / 2;



        //hotspot 1 Image
        infospot1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
        infospot1.position.set( 3000,300,100 );
        infospot1.addHoverElement( document.getElementById( 'desc-container2' ),150);
        panorama.add( infospot1 );

        //hotspot 2 vidéo
        infospot2 = new PANOLENS.Infospot( 300, 'asset/textures/video-play.png' );
        infospot2.position.set( 3000,200,-5000 );
        infospot2.addHoverElement( document.getElementById( 'desc-container' ),120);
        panorama.add( infospot2 );

        //hotspot 3 Son
        infospot3 = new PANOLENS.Infospot( 300, 'asset/textures/iconfinder_Audio_1891017.png' );
        infospot3.position.set( 3000,1000,2000 );
        infospot3.addHoverElement( document.getElementById( 'desc-container3' ),80);
        panorama.add( infospot3 );

        //hotspot 4 text
        infospot4 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
        infospot4.position.set( 3000,500,5000 );
        infospot4.addHoverText( "Beau quartier" );
        panorama2.add( infospot4 );

      

      viewer = new PANOLENS.Viewer( { output: 'console', container: document.querySelector( '#pcontainer' ) } );
      viewer.add( panorama, panorama2 );
      viewer.renderer.sortObjects = true;

      function getPropertyArray ( object ) {

        var array = [];

        for ( var name in object ) {

          array.push( name );

        }

        return array;

      }