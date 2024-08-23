<?php require_once('sql/db-sys.php');
?><!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="Wiyt" name="author">
        <meta content="Video editor, streamer and programmer" name="description"/>

        <title>Wiyt</title>
        <meta content="Wiyt" property="og:title"/>
        <meta content="Video editor, streamer and programmer" property="og:description"/>
        <meta content="https://wiyt.space.com/" property="og:url"/>
        <meta content="website" property="og:type"/>
        <meta content="res/img/og-image.png" property="og:image"/>

        <link rel="icon" href="res/img/favicon.ico" type="image/x-icon">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="res/css/google-fonts.css">
        <link rel="stylesheet" href="res/css/banners.css">
        <link rel="stylesheet" href="res/css/style.css">
        <link rel="stylesheet" href="res/css/fonts.css">
    </head>

    <body>
        <header class="fixed">
            <a href="#welcome"><img class="logo" src="res/svg/wiyt.svg" alt="Wiyt"/></a>
            <span class="links">
                <a class="link" href="https://www.youtube.com/@Wiyt">
                    <img src="res/svg/youtube.svg" alt="YouTube"/>
                </a>
                <a class="link" href="https://www.twitter.com/wiyt_js">
                    <img src="res/svg/twitter.svg" alt="Twitter/X"/>
                </a>
                <a class="link" href="https://soundcloud.com/wiyt">
                    <img src="res/svg/soundcloud.svg" alt="SoundCloud"/>
                </a>
            </span>
        </header>

        <main id="welcome">
            <article>
                <section>
                    <p>Welcome to my website and thanks for visiting!</p>
                    <p>I'm <b>Wiyt</b>; I'm known online for editing videos, streaming and programming, but I have much experience in many other fields as well.<br>I mainly use this space as a hub for my YouTube and streaming content and for writing about myself.</p>
                    <p>Visit any of the quick links below to get started and learn more about me.</p>
                    <span class="page"><a id="banner-biography" href="biography/"><div class="tile"><p>Biography</p></div></a></span>
                    <span class="page"><a id="banner-designs" href="projects/"><div class="tile"><p>Projects</p></div></a></span>
                    <span class="page"><a id="banner-stream" href="stream/"><div class="tile"><p>Stream</p></div></a></span>
                </section>
                <section>
                    <div>
                        <h1>Edits uploaded to YouTube</h1>
                        <h2>Videos<a id="videos" class="pilcrow" href="#videos">&para;</a></h2>
                    </div>
                    <div id="player"></div>
                    <ol id="video-list">
                        <?php
                        $sql = 'SELECT * FROM videos';
                        $result = mysqli_query($connection, $sql);
                        if(mysqli_num_rows($result) > 0) {
                            while($row = mysqli_fetch_assoc($result)) {
                                echo "<li id=\"" . $row['WatchID'] . "\">" . $row['TitleB64'] . "</li>";
                            }
                        } else { echo "<p>No videos found.</p>"; }
                        mysqli_close($connection);
                        ?>
                    </ol>
                </section>
            </article>
        </main>

        <footer>
            <p>wiyt.space 2024</p>
        </footer>
    </body>

    <script src="res/js/scroll.js" type="text/javascript"></script>
    <script src="res/js/media.js" type="text/javascript"></script>
</html>