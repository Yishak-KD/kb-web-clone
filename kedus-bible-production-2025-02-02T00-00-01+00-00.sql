--
-- PostgreSQL database dump
--

-- Dumped from database version 15.10 (Debian 15.10-0+deb12u1)
-- Dumped by pg_dump version 15.10 (Debian 15.10-0+deb12u1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contact_us; Type: TABLE; Schema: public; Owner: kedus_bible
--

CREATE TABLE public.contact_us (
    id integer NOT NULL,
    "fullName" text NOT NULL,
    email text NOT NULL,
    message text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.contact_us OWNER TO kedus_bible;

--
-- Name: contact_us_id_seq; Type: SEQUENCE; Schema: public; Owner: kedus_bible
--

CREATE SEQUENCE public.contact_us_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contact_us_id_seq OWNER TO kedus_bible;

--
-- Name: contact_us_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kedus_bible
--

ALTER SEQUENCE public.contact_us_id_seq OWNED BY public.contact_us.id;


--
-- Name: donation_information; Type: TABLE; Schema: public; Owner: kedus_bible
--

CREATE TABLE public.donation_information (
    id integer NOT NULL,
    "paymentMethod" text NOT NULL,
    "fullName" text NOT NULL,
    email text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    amount text NOT NULL,
    frequency text NOT NULL,
    "phoneNumber" text
);


ALTER TABLE public.donation_information OWNER TO kedus_bible;

--
-- Name: donation_information_id_seq; Type: SEQUENCE; Schema: public; Owner: kedus_bible
--

CREATE SEQUENCE public.donation_information_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.donation_information_id_seq OWNER TO kedus_bible;

--
-- Name: donation_information_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kedus_bible
--

ALTER SEQUENCE public.donation_information_id_seq OWNED BY public.donation_information.id;


--
-- Name: subscriber; Type: TABLE; Schema: public; Owner: kedus_bible
--

CREATE TABLE public.subscriber (
    id integer NOT NULL,
    email text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.subscriber OWNER TO kedus_bible;

--
-- Name: subscriber_id_seq; Type: SEQUENCE; Schema: public; Owner: kedus_bible
--

CREATE SEQUENCE public.subscriber_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subscriber_id_seq OWNER TO kedus_bible;

--
-- Name: subscriber_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kedus_bible
--

ALTER SEQUENCE public.subscriber_id_seq OWNED BY public.subscriber.id;


--
-- Name: user_information; Type: TABLE; Schema: public; Owner: kedus_bible
--

CREATE TABLE public.user_information (
    id integer NOT NULL,
    "fullName" text NOT NULL,
    email text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.user_information OWNER TO kedus_bible;

--
-- Name: user_information_id_seq; Type: SEQUENCE; Schema: public; Owner: kedus_bible
--

CREATE SEQUENCE public.user_information_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_information_id_seq OWNER TO kedus_bible;

--
-- Name: user_information_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kedus_bible
--

ALTER SEQUENCE public.user_information_id_seq OWNED BY public.user_information.id;


--
-- Name: contact_us id; Type: DEFAULT; Schema: public; Owner: kedus_bible
--

ALTER TABLE ONLY public.contact_us ALTER COLUMN id SET DEFAULT nextval('public.contact_us_id_seq'::regclass);


--
-- Name: donation_information id; Type: DEFAULT; Schema: public; Owner: kedus_bible
--

ALTER TABLE ONLY public.donation_information ALTER COLUMN id SET DEFAULT nextval('public.donation_information_id_seq'::regclass);


--
-- Name: subscriber id; Type: DEFAULT; Schema: public; Owner: kedus_bible
--

ALTER TABLE ONLY public.subscriber ALTER COLUMN id SET DEFAULT nextval('public.subscriber_id_seq'::regclass);


--
-- Name: user_information id; Type: DEFAULT; Schema: public; Owner: kedus_bible
--

ALTER TABLE ONLY public.user_information ALTER COLUMN id SET DEFAULT nextval('public.user_information_id_seq'::regclass);


--
-- Data for Name: contact_us; Type: TABLE DATA; Schema: public; Owner: kedus_bible
--

COPY public.contact_us (id, "fullName", email, message, "createdAt", "updatedAt") FROM stdin;
1	nate	nate@gs.com	sa	2024-03-28 04:09:07.682	2024-03-28 04:09:07.682
3	nate	ndereb3@gmail.com	,	2024-03-29 03:21:27.227	2024-03-29 03:21:27.227
4	Yishak Thomas	yisak04@gmail.com	Test	2024-03-29 15:56:15.547	2024-03-29 15:56:15.547
5	nate	ndereb3@gmail.com	test	2024-04-05 04:18:32.741	2024-04-05 04:18:32.741
6	nate@g	nate@g.com	test	2024-04-05 06:00:21.86	2024-04-05 06:00:21.86
7	yishak	test@email.com	test	2024-04-06 10:59:43.488	2024-04-06 10:59:43.488
8	Yishak Kidanu	yisak04@gmail.com	sfs	2024-04-06 11:00:01.908	2024-04-06 11:00:01.908
9	Nate	nate@email.com	hello	2024-04-09 08:41:31.945	2024-04-09 08:41:31.945
10	nate	nate@gmail.com	test	2024-04-10 03:35:45.36	2024-04-10 03:35:45.36
11	Alemu Diribsa 	alemudr2@gmail.com	Nice to meet you	2024-04-17 11:48:35.966	2024-04-17 11:48:35.966
12	woynitu	Srwoynitu@gmail.com	God bless us all	2024-04-18 07:40:27.118	2024-04-18 07:40:27.118
13	woynitu	Srwoynitu@gmail.com	May God bless all of us	2024-04-18 07:41:07.564	2024-04-18 07:41:07.564
14	Test 3	test6@email.com	Test	2024-04-18 09:35:08.857	2024-04-18 09:35:08.857
15	Yishak T	test22@email.com	test	2024-04-19 07:01:42.499	2024-04-19 07:01:42.499
16	Tirunesh Belachew	tiruneshbelachew@gmail.com	Kedusbible is good	2024-04-19 11:08:54.923	2024-04-19 11:08:54.923
17	Amen Birhanu	amenbirhanu11@gmail.com	I read bible and start  always 	2024-04-21 08:43:10.01	2024-04-21 08:43:10.01
18	Tolewak Keneni Hundessa	tolewakhundessa@gmail.com	God is good 	2024-04-24 10:12:34.373	2024-04-24 10:12:34.373
19	Alemayehu Befekadu	alemayehbefe8@gmail.com	How do I contribute the donation? I am living in Ethiopia and using local currency birr.  	2024-04-27 11:12:56.342	2024-04-27 11:12:56.342
20	Matea Shake	shake.typing@shake-f9c53dbb80eb.intercom-mail.com	Hi,\n\nI tried to contact you via the mail you provided on your Startup Application and via your info mail, but for some reason, I got an error saying: The recipient is invalid. \n\nSo I will pass the mail here, hoping you will get it: \n\nHi there,\n\nMatea from Shake here. I'm just getting back to you about your application to Startup Pricing.\n\nFirst of all, I'm glad to approve your request and let you get our Startup Pricing, since you meet all our requirements. You seem like a small and dedicated team and we are glad to help. Secondly, thank you for showing interest in our product.\n\nTo clarify - you will get a discount on the Annual Premium plan. It's $15 per month for your first year, and $60 per month for your second.\n\nIf you have any further questions or concerns, please don't hesitate to ask. I will put the discount into effect immediately, you just need to subscribe to the Annual Premium plan.\n\nHave a bugless day,\n\nMatea	2024-05-02 09:57:13.801	2024-05-02 09:57:13.801
21	Yishak	yishaktest@email.com	test	2024-05-13 09:32:43.058	2024-05-13 09:32:43.058
22	Chrissy	Lovechristina2180@gmail.com	Blessed morning, I'm trying to find out before I download this app is this Bible version a true representation of God? There are so many that claim to be true representation of God and the son of God. I don't want anything that represents Jesus (a pagan god) over the true savior. Please let me me. 	2024-05-19 15:04:39.634	2024-05-19 15:04:39.634
23	MESFIN BERISE KASHATO	www.mesaberisoo@gmail.com	I want to learn holy Bible in Amharic and be disciple of CHRIST JESUS 	2024-05-20 08:32:08.945	2024-05-20 08:32:08.945
24	MESFIN BERISE KASHATO	www.mesaberisoo@gmail.com	Stdy HOLY BIBLE IN AMHARIC	2024-05-20 08:38:16.844	2024-05-20 08:38:16.844
25	MESFIN BERISE KASHATO	www.mesaberisoo@gmail.com	To know GOD	2024-05-20 08:38:51.488	2024-05-20 08:38:51.488
26	Mengistu Mekebo	mengistumakebo@gmail.com	Kedus bible	2024-05-29 06:48:03.986	2024-05-29 06:48:03.986
27	Nick Tedla	nicolast03@gmail.com	Hello,\n\nI hope this message finds you well. Currently the 2.0 update has a bug that makes the app unusable on iOS. I receive a notification when I open the app that says “New Feature: The 1954 Amharic Bible version is now…” and the “ok” button is not responsive so I cannot remove the notification. I therefore cannot use the app. \n\nI hope this can be resolved promptly.\n\nThank you.	2024-05-30 15:50:38.428	2024-05-30 15:50:38.428
28	Riyaad Abdoo	riyaadabdoo14@gmail.com	Hi\n	2024-05-31 07:11:29.215	2024-05-31 07:11:29.215
29	Tagay Lemma	tagaylema@gmail.com	I wanted to be the member of your Holly  Bible 	2024-06-20 03:51:51.084	2024-06-20 03:51:51.084
30	legese demeke	legesedemeke@gmail.com	for download for me	2024-06-23 12:09:07.763	2024-06-23 12:09:07.763
31	Amine Kiflemariam Zemichael	aminezemichael@gmail.com	Shalom to every one who is the child of God is site. I need to inform me the main point you are focusing. Do you teach some courses based on the truth word of God. I hope to say me some thing. May God Bless you. 	2024-06-24 10:54:28.548	2024-06-24 10:54:28.548
32	Tsion legesse desta	Zdd1036@gov.com	\nSodo gurage bible	2024-06-26 12:44:39.685	2024-06-26 12:44:39.685
33	Milkiyas teshome 	milkiteshome424@gmail.com	Different age group of people use this app so it would be much convenient if we can change the  font size . Blessings keep up the good work 	2024-07-18 10:55:04.565	2024-07-18 10:55:04.565
34	Hussen Ambo	hussenambo@gmail.com	Thank you all for fhis wonderful job you prepared for God's people	2024-08-11 03:29:24.478	2024-08-11 03:29:24.478
35	Akililu birhnu	akililu299@gmail.com	ማቲዮስ 9(10)(11)	2024-08-24 05:33:31.762	2024-08-24 05:33:31.762
36	Akililu birhnu	akililu299@gmail.com	ማቲዮስ 9(10)(11)	2024-08-24 05:33:31.804	2024-08-24 05:33:31.804
37	Tibebu Taye	tayetibebuuu@gmail.com	ብዙ የመጽሀፍ ቅዱስ ትርጉሞችን አይቻለሁ ተጠቀሚባቸዋለሁም ይህ ቅዱስ ባይብል ግን ዲቮሽናል ስላለው ይለያል። ስህተቶች እንዳሉ ሆነው ብዙዎች እንደሚጠቀሙበት ተስፋ አደርጋለሁ። የኔ ምክር ፣መጽሐፍ ቅዱስ ፍጹም ስህተት ሊኖረው አይገባም።\nመንፈስ ቅዱስ አይሳሳትምና ስህተቶቹ ከታረሙ The best bible version ብዬ እመሰክራለሁ።\n	2024-08-28 04:12:15.504	2024-08-28 04:12:15.504
38	Asfawdenek	Asfawdenem89@gmail.com	Jesus is Lord 	2024-08-28 19:46:07.292	2024-08-28 19:46:07.292
39	Amanuel Tadesse	amanhabtad@gmail.com	God is good all the time 	2024-09-04 08:43:18.244	2024-09-04 08:43:18.244
40	Mamush tsegaye 	mamushtsegaye962@gmail.co	Yes \n\n 	2024-09-29 04:39:02.833	2024-09-29 04:39:02.833
41	MULUGETA BELAYNEH	mulugetabelayneh65@gmail.com	Please conect me with your prayer programs as required. Thank you	2024-10-16 18:33:07.847	2024-10-16 18:33:07.847
42	Mulugeta Belayneh Gebre	mulugetabelayneh65@gmail.com	I am intrsting to be communicate with your kedus bible stadies and prayer membership. Thank you	2024-10-16 18:37:42.663	2024-10-16 18:37:42.663
43	Moges serwana	mogesserwana@gmail.com	I LOVE BIBLE	2024-10-22 10:04:52.093	2024-10-22 10:04:52.093
44	Firehiwot Mengistu	firehiwotmengistu089@gmail.com	Mezemure\n	2024-10-23 07:24:43.172	2024-10-23 07:24:43.172
45	Tolosa Asefa 	tolosaa231@gmail.com	tolosa	2024-10-24 09:23:28.32	2024-10-24 09:23:28.32
46	Tibebu Tegegn	tibebutegegn511@gmail.com	የእውነት  ብዙ  ጭንቀት  ወደ  አይምሮዬ    ይመላለሳል ማልፈልገውን ነገር አስባለሁ በቃ  ያልሆነ  ልምምድ  ውስጥ  ነው  ያለውት	2024-11-12 19:43:18.282	2024-11-12 19:43:18.282
47	mnte 	yasamovies@gmail.com	Hi	2024-11-14 08:13:42.893	2024-11-14 08:13:42.893
48	Temesgen Asefa Nagari 	tamasgenasafa9@gmail.com	Free Bible 	2024-11-20 08:29:20.816	2024-11-20 08:29:20.816
49	Ananiya Bekele	atnatiyes@gmail.com	Tnx	2024-11-22 09:11:35.672	2024-11-22 09:11:35.672
50	Gelila Haile 	gelilahaile27@gmail.com	Bible audio study	2024-11-23 08:48:43.924	2024-11-23 08:48:43.924
51	Milkiyas mekuria	milkiyas0879@gmail.com	I want read the Bible daily \n	2024-11-25 08:35:47.386	2024-11-25 08:35:47.386
52	Ayale Ayalew Wondim	ayalewatala@gmail.com	What do we mean when we say aspect?	2024-11-25 22:26:17.088	2024-11-25 22:26:17.088
53	Gemechu Fgelo Sekako	gemechufogalo@gmail.com	I'm Happy to read the bible for my Life \nI went to read d/t spiritual Book's \n\n	2024-11-29 15:36:09.517	2024-11-29 15:36:09.517
54	Happy hizkel	happyhiziqel@gmail.com	Kedus	2024-12-09 14:14:47.518	2024-12-09 14:14:47.518
55	gawech thok	gatwechthok330@gmail.com	what's meanining of gospel mathew 6:5 it said that they have received their complete reward 	2024-12-16 09:35:21.77	2024-12-16 09:35:21.77
56	Ketema Demeke	Ketemacity7@gmail.com	God bless you am happy	2024-12-16 17:05:10.117	2024-12-16 17:05:10.117
57	Daniel Dangiso Dasa 	dangisodaniel304@gmail.com	013201012585400	2025-01-18 11:23:07.789	2025-01-18 11:23:07.789
58	Daniel Dangiso Dassa 	dangisodaniel304@gmail.com	013201012585400	2025-01-18 11:26:47.364	2025-01-18 11:26:47.364
59	Charles Pace	charles@commercialcleanrsla.com	\nAre you interested in a no-obligation quote for janitorial services? I’d like to provide you with a no-obligation quote that takes care of your facilities specific needs. Commercial Cleanrs is locally owned and operated, and we’re dedicated to providing the highest quality cleaning services.\n\nMay I give you more information?\n\nCharles Pace\nPresident\nCommercial Cleanrs LA\ncharles@commercialcleanrsla.com\n\nRespond with stop to optout.	2025-01-20 20:24:19.206	2025-01-20 20:24:19.206
60	Dawit Achalu Dima	devachalu4@gmail.com	I need Holy Bible	2025-01-23 17:59:06.167	2025-01-23 17:59:06.167
61	Dawit Achalu Dima	devachalu4@gmail.com	I need Holy Bible	2025-01-23 17:59:06.786	2025-01-23 17:59:06.786
62	Abrham gidey	Abshewawa@gmail.com	GOD	2025-01-23 19:07:05.029	2025-01-23 19:07:05.029
63	Ferihwot Erimyas	ferihwoterimyas@gmail.com	Hi 	2025-01-26 19:29:54.621	2025-01-26 19:29:54.621
64	Ferihwot Erimyas	ferihwoterimyas@gmail.com	እየሱስ 	2025-01-26 19:30:46.747	2025-01-26 19:30:46.747
65	Ferihwot Erimyas	ferihwoterimyas@gmail.com	እየሱስ 	2025-01-26 19:31:07.55	2025-01-26 19:31:07.55
66	WILKINS	wjerome943@gmail.com	N/A	2025-01-26 21:11:08.072	2025-01-26 21:11:08.072
\.


--
-- Data for Name: donation_information; Type: TABLE DATA; Schema: public; Owner: kedus_bible
--

COPY public.donation_information (id, "paymentMethod", "fullName", email, "createdAt", "updatedAt", amount, frequency, "phoneNumber") FROM stdin;
1	Chapa	nate	nat@gmail.com	2024-04-01 19:08:16.369	2024-04-01 19:08:16.369	25	Monthly	\N
2	paypal	Yishak T	test44@email.com	2024-04-19 07:00:59.98	2024-04-19 07:00:59.98	25	One Time	\N
3	paypal	Amen Birhanu	amenbirhanu11@gmail.com	2024-04-21 08:45:04.162	2024-04-21 08:45:04.162	50	One Time	\N
4	paypal	Nate Testing	nate@gmail.com	2024-04-21 08:46:05.712	2024-04-21 08:46:05.712	50	One Time	\N
5	paypal	Yishak Kidanu	yisak04@gmail.com	2024-04-21 17:53:58.261	2024-04-21 17:53:58.261	50	Monthly	\N
6	Chapa	Mike Test	mike@gmail.com	2024-04-22 05:24:16.657	2024-04-22 05:24:16.657	25	Monthly	\N
7	subsplash	test 100	test@email.com	2024-04-26 07:09:51.664	2024-04-26 07:09:51.664	10	Monthly	\N
8	paypal	test	test@gmail.com	2024-04-26 07:10:51.633	2024-04-26 07:10:51.633	50	Monthly	\N
9	subsplash	nate	nate@nate.nate	2024-04-26 07:11:32.628	2024-04-26 07:11:32.628	50	Monthly	\N
10	paypal	test	test@test.com	2024-04-29 06:10:56.091	2024-04-29 06:10:56.091	15	Monthly	\N
11	Chapa	Yonas T	yonaztad@gmail.com	2024-04-29 06:36:10.722	2024-04-29 06:36:10.722	10	Monthly	\N
12	Chapa	Test t	test@gmail.com	2024-04-29 06:41:51.293	2024-04-29 06:41:51.293	10	Monthly	\N
13	paypal	nate	nate@gmail.com	2024-04-30 06:27:57.163	2024-04-30 06:27:57.163	50	Monthly	\N
14	awash	Nate	derebnathenael@gmail.com	2024-05-02 04:59:59.442	2024-05-02 04:59:59.442	10	Monthly	0911292322
15	awash	nate test	nathnaelmelkamu@gmail.com	2024-05-02 05:00:22.167	2024-05-02 05:00:22.167	10	Monthly	
16	paypal	Dereb Wright	israelandhannah@gmail.com	2024-05-21 02:08:31.225	2024-05-21 02:08:31.225	100.00	Monthly	
17	paypal	Nate	nate@gmail.com	2024-07-21 22:46:37.412	2024-07-21 22:46:37.412	10	Monthly	
18	paypal	Manzoor malik 	manzoormalikmanzoormalik50@gmail.com	2024-09-07 23:24:42.332	2024-09-07 23:24:42.332	10	One Time	03558155164
19	paypal	Nate Testing	derebnathenael@gmail.com	2024-09-08 01:15:16.828	2024-09-08 01:15:16.828	10	One Time	5712901534
20	paypal	Marken Basiliyos	temebet307@gmail.com	2024-09-14 07:17:34.224	2024-09-14 07:17:34.224	15	Monthly	0913953097
21	awash	Almaz Weldegergish Tewelde	diamond_tewelde@yahoo.com	2024-09-14 13:02:16.481	2024-09-14 13:02:16.481	50	One Time	2147992988
22	paypal	Almaz Weldegergish Tewelde	diamond_tewelde@yahoo.com	2024-09-14 13:04:50.217	2024-09-14 13:04:50.217	10000000	One Time	2147992988
23	paypal	fasffas	xagibi8562@bflcafe.com	2024-11-30 17:23:44.075	2024-11-30 17:23:44.075	50	One Time	
24	awash	xagibi8562@bflcafe.com	xagibi8562@bflcafe.com	2024-11-30 17:24:22.825	2024-11-30 17:24:22.825	25	Monthly	
25	awash	Daniel Dangiso Dasa 	dangisodaniel304@gmail.com	2025-01-18 11:20:09.646	2025-01-18 11:20:09.646	50	One Time	0934256787
26	awash	Daniel Dangiso Dasa 	dangisodaniel304@gmail.com	2025-01-18 11:28:18.449	2025-01-18 11:28:18.449	50	One Time	0934256787
27	paypal	hjk	nU@gmail.com	2025-01-23 19:20:19.129	2025-01-23 19:20:19.129	15	Monthly	
28	awash	rhdd	r@gmail.com	2025-01-23 19:21:02.911	2025-01-23 19:21:02.911	50	Monthly	
\.


--
-- Data for Name: subscriber; Type: TABLE DATA; Schema: public; Owner: kedus_bible
--

COPY public.subscriber (id, email, "createdAt", "updatedAt") FROM stdin;
1	beshada@email.com	2024-03-29 16:04:51.303	2024-03-29 16:04:51.303
2	beshado@email.com	2024-03-29 16:06:00.343	2024-03-29 16:06:00.343
3	Habtehaile27@gmail.com	2024-04-11 19:46:31.264	2024-04-11 19:46:31.264
4	Abhoyee@email.com	2024-04-15 18:44:30.157	2024-04-15 18:44:30.157
5	alemudr2@gmail.com	2024-04-17 11:47:22.893	2024-04-17 11:47:22.893
6	test@email.com	2024-04-18 08:38:18.268	2024-04-18 08:38:18.268
7	tiruneshbelachew@gmail.com	2024-04-19 11:06:47.031	2024-04-19 11:06:47.031
8	afeworkmanza5@gmail.com	2024-04-24 11:55:37.802	2024-04-24 11:55:37.802
9	solomonkiros849@gmail.com	2024-04-27 07:09:51.257	2024-04-27 07:09:51.257
10	alemayebefe8@gmail.com	2024-04-27 11:14:33.456	2024-04-27 11:14:33.456
11	tomamarcogiuseppe@gmail.com	2024-05-08 13:51:31.609	2024-05-08 13:51:31.609
12	www.mesfinberise@gmail.com	2024-05-20 08:28:19.698	2024-05-20 08:28:19.698
13	www.mesfinberise@gma.com	2024-05-20 08:30:09.26	2024-05-20 08:30:09.26
14	riyaadabdoo14@gmail.com	2024-05-31 07:12:11.94	2024-05-31 07:12:11.94
15	mesfinmekegnomap@gmeil.com	2024-06-01 07:04:28.273	2024-06-01 07:04:28.273
16	mesfinmekegnomap@gmail.com	2024-06-01 07:05:45.042	2024-06-01 07:05:45.042
17	Mekbibmengistu19@gemil.com	2024-06-05 10:00:53.846	2024-06-05 10:00:53.846
18	amanzu649@gmail.com	2024-06-11 18:23:59.627	2024-06-11 18:23:59.627
19	tagaylema@gmail.com	2024-06-20 03:50:11.818	2024-06-20 03:50:11.818
20	felegdeb@gmail.com	2024-07-18 05:48:27.156	2024-07-18 05:48:27.156
21	hussenambo@gmail.com	2024-08-11 03:29:54.928	2024-08-11 03:29:54.928
22	Shegieamin1@gmail.com	2024-08-12 15:22:10.255	2024-08-12 15:22:10.255
23	akililu299@gmail.com	2024-08-24 05:34:21.6	2024-08-24 05:34:21.6
24	teamegebrehiwot03@gmail.com	2024-08-25 09:29:02.283	2024-08-25 09:29:02.283
25	gezahegntemesgen@gmail.com	2024-10-02 00:43:00.602	2024-10-02 00:43:00.602
26	selemawiiyohannes@gmail.com	2024-10-04 08:40:29.859	2024-10-04 08:40:29.859
27	selemawiiselemawii@gmail.com	2024-10-04 08:40:54.933	2024-10-04 08:40:54.933
28	mogesserwana@gmail.com	2024-10-22 10:05:50.441	2024-10-22 10:05:50.441
29	amrotali68@gmali.com	2024-10-24 03:40:58.073	2024-10-24 03:40:58.073
30	eluyetesfaye2@gmail.com	2024-11-01 05:12:17.677	2024-11-01 05:12:17.677
31	arafatmamun21@gmail.com	2024-11-04 14:58:41.277	2024-11-04 14:58:41.277
32	tgh_2002@yahoo.com	2024-11-10 09:26:13.81	2024-11-10 09:26:13.81
33	maltutrut@gmail.com	2024-11-12 08:07:08.198	2024-11-12 08:07:08.198
34	yasamovies@gmail.com	2024-11-14 08:14:16.611	2024-11-14 08:14:16.611
35	Mnte1424@gmail.com	2024-11-14 08:14:52.637	2024-11-14 08:14:52.637
36	abaateabebe@gmail.com	2024-11-20 06:19:57.729	2024-11-20 06:19:57.729
37	tamasgenasafa9@gmail.com	2024-11-20 08:29:46.709	2024-11-20 08:29:46.709
38	atnatiyes@gmail.com	2024-11-22 09:10:36.21	2024-11-22 09:10:36.21
39	gelilahaile27@gmail.com	2024-11-23 08:48:57.208	2024-11-23 08:48:57.208
40	milkiyas0879@gmail.com	2024-11-25 08:37:33.678	2024-11-25 08:37:33.678
41	adamuworku097@gmail.com	2024-12-02 16:31:44.829	2024-12-02 16:31:44.829
42	happyhiziqel@gmail.com	2024-12-09 14:15:15.892	2024-12-09 14:15:15.892
43	taduzewde78@gmail.com	2024-12-12 12:14:01.384	2024-12-12 12:14:01.384
44	tesfumercy06@gmail.Com	2024-12-18 12:27:33.012	2024-12-18 12:27:33.012
45	dangisodaniel304@gmail.com	2025-01-18 11:25:52.918	2025-01-18 11:25:52.918
46	musealebo41@gmail.com	2025-01-29 18:06:16.371	2025-01-29 18:06:16.371
47	diribeenigusee@gmail.com	2025-02-01 06:29:23.898	2025-02-01 06:29:23.898
\.


--
-- Data for Name: user_information; Type: TABLE DATA; Schema: public; Owner: kedus_bible
--

COPY public.user_information (id, "fullName", email, "createdAt", "updatedAt") FROM stdin;
1	Yonas Tadesse	yonasttt@gmail.com	2024-03-28 13:35:09.766	2024-03-28 13:35:09.766
2	Test	test56@email.com	2024-03-29 16:01:46.511	2024-03-29 16:01:46.511
3	Yonas Tadesse	yonaztad@gmail.com	2024-03-30 13:07:50.793	2024-03-30 13:07:50.793
4	Yonas Tadesse	yonaztad@gmail.com	2024-03-30 13:39:45.253	2024-03-30 13:39:45.253
\.


--
-- Name: contact_us_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kedus_bible
--

SELECT pg_catalog.setval('public.contact_us_id_seq', 66, true);


--
-- Name: donation_information_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kedus_bible
--

SELECT pg_catalog.setval('public.donation_information_id_seq', 28, true);


--
-- Name: subscriber_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kedus_bible
--

SELECT pg_catalog.setval('public.subscriber_id_seq', 47, true);


--
-- Name: user_information_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kedus_bible
--

SELECT pg_catalog.setval('public.user_information_id_seq', 4, true);


--
-- Name: contact_us contact_us_pkey; Type: CONSTRAINT; Schema: public; Owner: kedus_bible
--

ALTER TABLE ONLY public.contact_us
    ADD CONSTRAINT contact_us_pkey PRIMARY KEY (id);


--
-- Name: donation_information donation_information_pkey; Type: CONSTRAINT; Schema: public; Owner: kedus_bible
--

ALTER TABLE ONLY public.donation_information
    ADD CONSTRAINT donation_information_pkey PRIMARY KEY (id);


--
-- Name: subscriber subscriber_pkey; Type: CONSTRAINT; Schema: public; Owner: kedus_bible
--

ALTER TABLE ONLY public.subscriber
    ADD CONSTRAINT subscriber_pkey PRIMARY KEY (id);


--
-- Name: user_information user_information_pkey; Type: CONSTRAINT; Schema: public; Owner: kedus_bible
--

ALTER TABLE ONLY public.user_information
    ADD CONSTRAINT user_information_pkey PRIMARY KEY (id);


--
-- Name: contact_us_email_idx; Type: INDEX; Schema: public; Owner: kedus_bible
--

CREATE INDEX contact_us_email_idx ON public.contact_us USING btree (email);


--
-- Name: donation_information_email_idx; Type: INDEX; Schema: public; Owner: kedus_bible
--

CREATE INDEX donation_information_email_idx ON public.donation_information USING btree (email);


--
-- Name: subscriber_email_idx; Type: INDEX; Schema: public; Owner: kedus_bible
--

CREATE INDEX subscriber_email_idx ON public.subscriber USING btree (email);


--
-- Name: subscriber_email_key; Type: INDEX; Schema: public; Owner: kedus_bible
--

CREATE UNIQUE INDEX subscriber_email_key ON public.subscriber USING btree (email);


--
-- Name: user_information_email_idx; Type: INDEX; Schema: public; Owner: kedus_bible
--

CREATE INDEX user_information_email_idx ON public.user_information USING btree (email);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT ALL ON SCHEMA public TO kedus_bible;


--
-- PostgreSQL database dump complete
--

