import { VM } from "vm2";

export function extractData(jsBody) {
  const regex = /window\.process\s*=\s*({[\s\S]*?});/;
  const match = jsBody.match(regex);

  if (match && match[1]) {
    const rawData = match[1];

    const vm = new VM({
      sandbox: {},
    });

    try {
      const cleanedData = rawData.replace(/'/g, '"').replace(/,\s*}/g, "}");

      const script = `
                const window = {};
                window.process = ${cleanedData};
                JSON.stringify(window.process);
            `;

      const result = vm.run(script);
      const processData = JSON.parse(result);

      return {
        MIX_AUTH_ROUTE_PARAM: processData.env.MIX_AUTH_ROUTE_PARAM,
        MIX_PAGE_TOKEN_KEY: processData.env.MIX_PAGE_TOKEN_KEY,
        MIX_STREAM_SERVER_KEY: processData.env.MIX_STREAM_SERVER_KEY,
      };
    } catch (e) {
      return null;
    }
  }

  return null;
}
