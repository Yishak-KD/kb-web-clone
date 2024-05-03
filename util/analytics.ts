import ReactGA from "react-ga4";

export const initGA = (): void => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_KEY ?? "");
};