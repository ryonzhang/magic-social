import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

export const socialLogins = ["apple", "bitbucket", "discord", "facebook", "github", "gitlab", "google", "linkedin", "twitter", "twitch", "microsoft"];

export const magic = new Magic("pk_live_4B87453FF0BE0007", {
  extensions: [new OAuthExtension()],
});
