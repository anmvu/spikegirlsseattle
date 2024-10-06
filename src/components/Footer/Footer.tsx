import { Button, Flex } from "@mantine/core";
import { InstagramIcon } from "../Instagram/InstagramIcon";
import { FacebookIcon } from "../Facebook/FacebookIcon";

export function Footer() {
    return (
        <Flex justify={"center"}>
            <Button
                variant="subtle"
                onClick={() => { window.location.assign("https://www.instagram.com/spikegirlsseattle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==") }}
                // href="https://www.instagram.com/spikegirlsseattle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                leftSection={<InstagramIcon size={30} />}
            >Follow us on Instagram</Button>
            <Button
                onClick={() => { window.location.assign("https://www.facebook.com/profile.php?id=61566323518164") }}
                // href="https://www.facebook.com/profile.php?id=61566323518164"
                variant="subtle"
                leftSection={<FacebookIcon size={30} />}
            >Follow us on Facebook</Button>
        </Flex>
    )
}