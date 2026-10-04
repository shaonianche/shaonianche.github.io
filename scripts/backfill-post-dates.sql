-- Backfill historical publish/update dates for the EmDash migration.
-- Source: legacy Saber frontmatter in pages/_posts (date / updated).
-- Dates are stored at noon UTC to match the dates shown on blog.duanfei.org.
-- Apply to production with:
--   npx wrangler d1 execute blog --remote --file scripts/backfill-post-dates.sql

UPDATE ec_posts SET published_at='2016-09-23T12:00:00.000Z', created_at='2016-09-23T12:00:00.000Z', updated_at='2016-09-23T12:00:00.000Z' WHERE slug='my-whole-life';
UPDATE ec_posts SET published_at='2017-02-07T12:00:00.000Z', created_at='2017-02-07T12:00:00.000Z', updated_at='2017-02-07T12:00:00.000Z' WHERE slug='start';
UPDATE ec_posts SET published_at='2017-04-03T12:00:00.000Z', created_at='2017-04-03T12:00:00.000Z', updated_at='2017-04-03T12:00:00.000Z' WHERE slug='time';
UPDATE ec_posts SET published_at='2018-02-26T12:00:00.000Z', created_at='2018-02-26T12:00:00.000Z', updated_at='2018-02-26T12:00:00.000Z' WHERE slug='games-data2';
UPDATE ec_posts SET published_at='2018-04-02T12:00:00.000Z', created_at='2018-04-02T12:00:00.000Z', updated_at='2018-04-02T12:00:00.000Z' WHERE slug='fu-lei-letters';
UPDATE ec_posts SET published_at='2018-04-05T12:00:00.000Z', created_at='2018-04-05T12:00:00.000Z', updated_at='2018-04-05T12:00:00.000Z' WHERE slug='hello-friend';
UPDATE ec_posts SET published_at='2019-01-17T12:00:00.000Z', created_at='2019-01-17T12:00:00.000Z', updated_at='2019-01-17T12:00:00.000Z' WHERE slug='we';
UPDATE ec_posts SET published_at='2019-06-27T12:00:00.000Z', created_at='2019-06-27T12:00:00.000Z', updated_at='2019-06-27T12:00:00.000Z' WHERE slug='social-animal';
UPDATE ec_posts SET published_at='2019-06-27T12:00:00.000Z', created_at='2019-06-27T12:00:00.000Z', updated_at='2019-06-27T12:00:00.000Z' WHERE slug='How-to-Think-Straight-chinaese';
UPDATE ec_posts SET published_at='2019-06-27T12:00:00.000Z', created_at='2019-06-27T12:00:00.000Z', updated_at='2019-06-27T12:00:00.000Z' WHERE slug='lorem-ipsum';
UPDATE ec_posts SET published_at='2019-06-27T12:00:00.000Z', created_at='2019-06-27T12:00:00.000Z', updated_at='2019-06-27T12:00:00.000Z' WHERE slug='soul-series';
UPDATE ec_posts SET published_at='2019-09-19T12:00:00.000Z', created_at='2019-09-19T12:00:00.000Z', updated_at='2019-09-19T12:00:00.000Z' WHERE slug='mountains-may-depart';
UPDATE ec_posts SET published_at='2019-11-30T12:00:00.000Z', created_at='2019-11-30T12:00:00.000Z', updated_at='2019-11-30T12:00:00.000Z' WHERE slug='customer-journey-maps';
UPDATE ec_posts SET published_at='2019-12-18T12:00:00.000Z', created_at='2019-12-18T12:00:00.000Z', updated_at='2019-12-18T12:00:00.000Z' WHERE slug='good-and-bad';
UPDATE ec_posts SET published_at='2020-09-07T12:00:00.000Z', created_at='2020-09-07T12:00:00.000Z', updated_at='2020-09-07T12:00:00.000Z' WHERE slug='restart';
UPDATE ec_posts SET published_at='2020-09-10T12:00:00.000Z', created_at='2020-09-10T12:00:00.000Z', updated_at='2021-01-29T12:00:00.000Z' WHERE slug='use-yourself-as-a-method';
UPDATE ec_posts SET published_at='2020-09-15T12:00:00.000Z', created_at='2020-09-15T12:00:00.000Z', updated_at='2020-09-15T12:00:00.000Z' WHERE slug='private-secondary-school';
UPDATE ec_posts SET published_at='2020-10-13T12:00:00.000Z', created_at='2020-10-13T12:00:00.000Z', updated_at='2020-10-13T12:00:00.000Z' WHERE slug='national-day-holiday';
UPDATE ec_posts SET published_at='2020-12-30T12:00:00.000Z', created_at='2020-12-30T12:00:00.000Z', updated_at='2020-12-30T12:00:00.000Z' WHERE slug='2020-end';
UPDATE ec_posts SET published_at='2021-01-04T12:00:00.000Z', created_at='2021-01-04T12:00:00.000Z', updated_at='2021-01-04T12:00:00.000Z' WHERE slug='more-Joel-on-software';
UPDATE ec_posts SET published_at='2021-01-28T12:00:00.000Z', created_at='2021-01-28T12:00:00.000Z', updated_at='2021-01-28T12:00:00.000Z' WHERE slug='chromecast-with-google-tv-time-error';
UPDATE ec_posts SET published_at='2021-01-29T12:00:00.000Z', created_at='2021-01-29T12:00:00.000Z', updated_at='2021-01-29T12:00:00.000Z' WHERE slug='XuZhiyuan-conversation-with-XiangBiao';
UPDATE ec_posts SET published_at='2022-01-07T12:00:00.000Z', created_at='2022-01-07T12:00:00.000Z', updated_at='2022-01-07T12:00:00.000Z' WHERE slug='2021-end';
UPDATE ec_posts SET published_at='2022-01-13T12:00:00.000Z', created_at='2022-01-13T12:00:00.000Z', updated_at='2022-01-13T12:00:00.000Z' WHERE slug='0x1b';
UPDATE ec_pages SET published_at='2015-05-18T12:00:00.000Z', created_at='2015-05-18T12:00:00.000Z', updated_at='2020-07-28T12:00:00.000Z' WHERE slug='about';
UPDATE ec_pages SET published_at='2015-05-18T12:00:00.000Z', created_at='2015-05-18T12:00:00.000Z', updated_at='2020-06-08T12:00:00.000Z' WHERE slug='guestbook';
