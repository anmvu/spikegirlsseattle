import { useEffect } from "react"

export function Facebook() {

    useEffect(() => {
        if (window.facebook) window.facebook.Embeds.process()
    })

    return (
        <>
            <div id="fb-root">
            </div>
            <script async defer crossOrigin="anonymous"
                src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0">
            </script>
            <div className="fb-page"
                data-href="https://www.facebook.com/profile.php?id=61566323518164&amp;sk=about_profile_transparency"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="true"
                data-show-facepile="false">
                <blockquote cite="https://www.facebook.com/profile.php?id=61566323518164&amp;sk=about_profile_transparency"
                    className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/profile.php?id=61566323518164&amp;sk=about_profile_transparency">Spike Girls Seattle</a>
                </blockquote>
            </div>
        </>
    )
}