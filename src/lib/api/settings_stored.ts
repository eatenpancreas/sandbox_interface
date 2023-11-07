import getStorable from "$lib/common/getStorable";

export const api_url = getStorable("", "local_url");
export const session_id = getStorable("", "session_id");
export const user = getStorable("", "user");
