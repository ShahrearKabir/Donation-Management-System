PGDMP                       }            donation_management_system_db    17.1    17.1 2    H           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            I           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            J           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            K           1262    26230    donation_management_system_db    DATABASE        CREATE DATABASE donation_management_system_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
 -   DROP DATABASE donation_management_system_db;
                     postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                     pg_database_owner    false            L           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                        pg_database_owner    false    4            �            1259    26512    donation    TABLE     �   CREATE TABLE public.donation (
    id integer NOT NULL,
    amount integer NOT NULL,
    "userId" integer,
    "fundId" integer
);
    DROP TABLE public.donation;
       public         heap r       postgres    false    4            �            1259    26511    donation_id_seq    SEQUENCE     �   CREATE SEQUENCE public.donation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.donation_id_seq;
       public               postgres    false    4    225            M           0    0    donation_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.donation_id_seq OWNED BY public.donation.id;
          public               postgres    false    224            �            1259    26524    fund    TABLE     �   CREATE TABLE public.fund (
    id integer NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    "fundType" character varying NOT NULL
);
    DROP TABLE public.fund;
       public         heap r       postgres    false    4            �            1259    26523    fund_id_seq    SEQUENCE     �   CREATE SEQUENCE public.fund_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.fund_id_seq;
       public               postgres    false    4    227            N           0    0    fund_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.fund_id_seq OWNED BY public.fund.id;
          public               postgres    false    226            �            1259    26280 
   migrations    TABLE     �   CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.migrations;
       public         heap r       postgres    false    4            �            1259    26279    migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.migrations_id_seq;
       public               postgres    false    218    4            O           0    0    migrations_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
          public               postgres    false    217            �            1259    26390    role    TABLE     [   CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.role;
       public         heap r       postgres    false    4            �            1259    26389    role_id_seq    SEQUENCE     �   CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.role_id_seq;
       public               postgres    false    220    4            P           0    0    role_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;
          public               postgres    false    219            �            1259    26399    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    donations integer DEFAULT 0 NOT NULL
);
    DROP TABLE public."user";
       public         heap r       postgres    false    4            �            1259    26398    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public               postgres    false    222    4            Q           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public               postgres    false    221            �            1259    26415    user_roles_role    TABLE     f   CREATE TABLE public.user_roles_role (
    "userId" integer NOT NULL,
    "roleId" integer NOT NULL
);
 #   DROP TABLE public.user_roles_role;
       public         heap r       postgres    false    4            �           2604    26515    donation id    DEFAULT     j   ALTER TABLE ONLY public.donation ALTER COLUMN id SET DEFAULT nextval('public.donation_id_seq'::regclass);
 :   ALTER TABLE public.donation ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    225    224    225            �           2604    26527    fund id    DEFAULT     b   ALTER TABLE ONLY public.fund ALTER COLUMN id SET DEFAULT nextval('public.fund_id_seq'::regclass);
 6   ALTER TABLE public.fund ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    227    226    227            �           2604    26283    migrations id    DEFAULT     n   ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
 <   ALTER TABLE public.migrations ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            �           2604    26393    role id    DEFAULT     b   ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);
 6   ALTER TABLE public.role ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            �           2604    26402    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    221    222    222            C          0    26512    donation 
   TABLE DATA           B   COPY public.donation (id, amount, "userId", "fundId") FROM stdin;
    public               postgres    false    225   �7       E          0    26524    fund 
   TABLE DATA           B   COPY public.fund (id, title, description, "fundType") FROM stdin;
    public               postgres    false    227   >8       <          0    26280 
   migrations 
   TABLE DATA           ;   COPY public.migrations (id, "timestamp", name) FROM stdin;
    public               postgres    false    218   }8       >          0    26390    role 
   TABLE DATA           (   COPY public.role (id, name) FROM stdin;
    public               postgres    false    220   �8       @          0    26399    user 
   TABLE DATA           @   COPY public."user" (id, email, password, donations) FROM stdin;
    public               postgres    false    222   �8       A          0    26415    user_roles_role 
   TABLE DATA           =   COPY public.user_roles_role ("userId", "roleId") FROM stdin;
    public               postgres    false    223   �9       R           0    0    donation_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.donation_id_seq', 8, true);
          public               postgres    false    224            S           0    0    fund_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.fund_id_seq', 3, true);
          public               postgres    false    226            T           0    0    migrations_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.migrations_id_seq', 3, true);
          public               postgres    false    217            U           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 3, true);
          public               postgres    false    219            V           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 6, true);
          public               postgres    false    221            �           2606    26517 '   donation PK_25fb5a541964bc5cfc18fb13a82 
   CONSTRAINT     g   ALTER TABLE ONLY public.donation
    ADD CONSTRAINT "PK_25fb5a541964bc5cfc18fb13a82" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.donation DROP CONSTRAINT "PK_25fb5a541964bc5cfc18fb13a82";
       public                 postgres    false    225            �           2606    26287 )   migrations PK_8c82d7f526340ab734260ea46be 
   CONSTRAINT     i   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.migrations DROP CONSTRAINT "PK_8c82d7f526340ab734260ea46be";
       public                 postgres    false    218            �           2606    26397 #   role PK_b36bcfe02fc8de3c57a8b2391c2 
   CONSTRAINT     c   ALTER TABLE ONLY public.role
    ADD CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.role DROP CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2";
       public                 postgres    false    220            �           2606    26531 #   fund PK_b3ac6e413e6e449bb499db1ccbc 
   CONSTRAINT     c   ALTER TABLE ONLY public.fund
    ADD CONSTRAINT "PK_b3ac6e413e6e449bb499db1ccbc" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.fund DROP CONSTRAINT "PK_b3ac6e413e6e449bb499db1ccbc";
       public                 postgres    false    227            �           2606    26419 .   user_roles_role PK_b47cd6c84ee205ac5a713718292 
   CONSTRAINT     ~   ALTER TABLE ONLY public.user_roles_role
    ADD CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId");
 Z   ALTER TABLE ONLY public.user_roles_role DROP CONSTRAINT "PK_b47cd6c84ee205ac5a713718292";
       public                 postgres    false    223    223            �           2606    26407 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public                 postgres    false    222            �           1259    26421    IDX_4be2f7adf862634f5f803d246b    INDEX     `   CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON public.user_roles_role USING btree ("roleId");
 4   DROP INDEX public."IDX_4be2f7adf862634f5f803d246b";
       public                 postgres    false    223            �           1259    26420    IDX_5f9286e6c25594c6b88c108db7    INDEX     `   CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON public.user_roles_role USING btree ("userId");
 4   DROP INDEX public."IDX_5f9286e6c25594c6b88c108db7";
       public                 postgres    false    223            �           2606    26518 '   donation FK_063499388657e648418470a439a    FK CONSTRAINT     �   ALTER TABLE ONLY public.donation
    ADD CONSTRAINT "FK_063499388657e648418470a439a" FOREIGN KEY ("userId") REFERENCES public."user"(id);
 S   ALTER TABLE ONLY public.donation DROP CONSTRAINT "FK_063499388657e648418470a439a";
       public               postgres    false    3485    225    222            �           2606    26432 .   user_roles_role FK_4be2f7adf862634f5f803d246b8    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles_role
    ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES public.role(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public.user_roles_role DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b8";
       public               postgres    false    3483    220    223            �           2606    26427 .   user_roles_role FK_5f9286e6c25594c6b88c108db77    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles_role
    ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public.user_roles_role DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77";
       public               postgres    false    222    223    3485            �           2606    26548 '   donation FK_975d1e19f5cd71936afaebeba04    FK CONSTRAINT     �   ALTER TABLE ONLY public.donation
    ADD CONSTRAINT "FK_975d1e19f5cd71936afaebeba04" FOREIGN KEY ("fundId") REFERENCES public.fund(id);
 S   ALTER TABLE ONLY public.donation DROP CONSTRAINT "FK_975d1e19f5cd71936afaebeba04";
       public               postgres    false    227    3493    225            C   1   x�3�45���".��2崴�
�!��9-,��F\P1C�=... �Y      E   /   x�3�t+�KQ0�R
)���P6����䌸�!�$g����� K�      <      x������ � �      >   $   x�3�tt����2�v�2�t�������� V%�      @   �   x�e�Kr�0  �u8k 	�lS,�#N7)I���A:�^��L�����\z�ތZ�@GT���
8G�<@I�I��>��d��lM�؋������T]�]K�SR���896SuBݯ|��1�qZ]�j��w��7'o�sn��[Qb;޺��tC�F~p��0+�)=r�*4�#dD���٢�9M���o�]5�o�ah�� ��H�      A      x�3�4�2�4�2�=... s     