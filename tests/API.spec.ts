import { test, expect, request } from '@playwright/test';

test('Demo API GET request', async ({ request }) => {
    const response = await request.get("https://petstore.octoperf.com/actions/Catalog.action")
    expect(response.status()).toBe(200);
});




test.only('Demo API POST request', async ({ request }) => {
    const response = await request.post("https://petstore.octoperf.com/actions/Account.action", {
        data: {
            username: 'KaKaTeo',
            password: 'ga7x0830',
            // signon: 'Login',
            // _sourcePage: 'o29KER3JhxCXUm2QCrV6Ozd0Yb43_cJ2kXqj-qhyPDRrUko9OIEtKjq8KJNOlJJBhu5_aict5ksLpRN6ZNnYoFK6Z2wN-nDoKUNahYdkUzE=',
            // __fp: 'w6SUE2NikqHH_ZKWgQ0I3lJRPNcZnhvUky_iQr_ffhlF8RdZdU__dAbN4WznXGx7'

        }

    });
    expect(response.status()).toBe(200);
});
