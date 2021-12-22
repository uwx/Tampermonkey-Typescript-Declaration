/* eslint-disable */

// https://github.com/uwx/Tampermonkey-Typescript-Declaration/blob/master/tampermonkey.d.ts
declare global {

    const unsafeWindow: Window;

    const GM_info: {
        version: string,
        scriptWillUpdate: boolean,
        scriptHandler: 'Tampermonkey',
        scriptUpdateURL?: string,
        scriptSource: string,
        scriptMetaStr?: string,
        isIncognito: boolean,
        downloadMode: 'native' | 'disabled' | 'browser',
        script: {
            author?: string,
            description?: string,
            excludes: string[],
            homepage?: string,
            icon?: string,
            icon64?: string,
            includes?: string[],
            lastModified: number,
            matches: string[],
            name: string,
            namespace?: string,
            position: number,
            'run-at': string,
            resources: string[],
            unwrap: boolean,
            version: string,
            options: {
                awareOfChrome: boolean,
                run_at: string,
                noframes?: boolean,
                compat_arrayLeft: boolean,
                compat_foreach: boolean,
                compat_forvarin: boolean,
                compat_metadata: boolean,
                compat_uW_gmonkey: boolean,
                override: {
                    orig_excludes: string[],
                    orig_includes: string[],
                    use_includes: string[],
                    use_excludes: string[],
                    [key: string]: any,
                },
                [key: string]: any,
            },
            [key: string]: any,
        },
        [key: string]: any,
    };

    /**
     * Adds the given style to the document and returns the injected style element.
     */
    function GM_addStyle(css: string): void;

    /**
     * Deletes 'name' from storage.
     * @param name
     */
    function GM_deleteValue(name: string): void;

    /**
     * List all names of the storage.
     */
    function GM_listValues(): string[];

    /**
     * Adds a change listener to the storage and returns the listener ID.
     * The 'remote' argument of the callback function shows whether this value was modified from the instance of another tab (true) or within this script instance (false).
     * Therefore this functionality can be used by scripts of different browser tabs to communicate with each other.
     *
     * @param name the name of the observed variable
     * @param listener
     * @returns the listener ID
     */
    function GM_addValueChangeListener(name: string, listener: GM_Types.ValueChangeListener): number;

    /**
     * Removes a change listener by its ID.
     * @param listenerId the listener ID
     */
    function GM_removeValueChangeListener(listenerId: number): void;

    /**
     * Set the value of 'name' to the storage.
     * @param name
     * @param value
     */
    function GM_setValue(name: string, value: any): void;

    /**
     * Get the value of 'name' from storage.
     * @param name
     * @param defaultValue
     */
    function GM_getValue(name: string, defaultValue?: any): any;

    /**
     * Log a message to the console.
     * @param message
     */
    function GM_log(message: string): any;

    /**
     * Get the content of a predefined @resource tag at the script header.
     * @param name
     */
    function GM_getResourceText(name: string): string;

    /**
     * Get the base64 encoded URI of a predefined @resource tag at the script header.
     * @param name
     */
    function GM_getResourceURL(name: string): string;

    /**
     * Register a menu to be displayed at the Tampermonkey menu at pages where this script runs and returns a menu
     * command ID.
     * @param name
     * @param listener
     * @param accessKey
     * @returns the new menu command ID
     */
    function GM_registerMenuCommand(name: string, listener: Function, accessKey?: string): number;

    /**
     * Unregister a menu command that was previously registered by GM_registerMenuCommand with the given menu command
     * ID.
     * @param id the menu command ID
     */
    function GM_unregisterMenuCommand(id: number): void;

    /**
     * Open a new tab with this url. The options object can have the following properties:
     * `active` decides whether the new tab should be focused,
     * `insert` that inserts the new tab after the current one,
     * `setParent` makes the browser re-focus the current tab on close and
     * `incognito` makes the tab being opened inside a incognito mode/private mode window.
     * Otherwise the new tab is just appended. `loadInBackground` has the opposite meaning of `active` and was added to
     * achieve Greasemonkey 3.x compatibility. If neither `active` nor `loadInBackground` is given, then the tab will
     * not be focused. This function returns an object with the function `close`, the listener `onclose` and a flag
     * called `closed`.
     * @param url
     * @param options
     */
    function GM_openInTab(url: string, options: GM_Types.OpenTabOptions): GM_Types.OpenTabResult;
    function GM_openInTab(url: string, loadInBackground: boolean): GM_Types.OpenTabResult;
    function GM_openInTab(url: string): GM_Types.OpenTabResult;

    function GM_xmlhttpRequest<CONTEXT_TYPE>(details: GM_Types.XHRDetails<CONTEXT_TYPE>): GM_Types.AbortHandle<void>;


    function GM_download(details: GM_Types.DownloadDetails): GM_Types.AbortHandle<boolean>;
    function GM_download(url: string, filename: string): GM_Types.AbortHandle<boolean>;

    function GM_getTab(callback: (obj: object) => any): void;
    function GM_saveTab(obj: object): void;
    function GM_getTabs(callback: (objs: { [key: number]: object }) => any): void;

    function GM_notification(details: GM_Types.NotificationDetails, ondone: Function): void;
    function GM_notification(text: string, title: string, image: string, onclick: Function): void;

    function GM_setClipboard(data: string, info?: string | { type?: string, minetype?: string }): void;


    function GM_addElement<K extends keyof HTMLElementTagNameMap>(tagName: K, attributes?: Record<string, string>): HTMLElementTagNameMap[K];
    function GM_addElement<K extends keyof HTMLElementTagNameMap>(parentNode: Node | Element | ShadowRoot, tagName: K, attributes?: Record<string, string>): HTMLElementTagNameMap[K];

    /** @deprecated */ function GM_addElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, attributes?: Record<string, string>): HTMLElementDeprecatedTagNameMap[K];
    /** @deprecated */ function GM_addElement<K extends keyof HTMLElementDeprecatedTagNameMap>(parentNode: Node | Element | ShadowRoot, tagName: K, attributes?: Record<string, string>): HTMLElementDeprecatedTagNameMap[K];

    function GM_addElement(tagName: string, attributes?: Record<string, string>): HTMLElement;
    function GM_addElement(parentNode: Node | Element | ShadowRoot, tagName: string, attributes?: Record<string, string>): HTMLElement;

    function GM_cookie(method: 'list' | 'set' | 'delete', details: unknown, cb: (cookies: Cookie[], error?: Error) => void): any;

    /**
     * (Re-)registers rules for web request manipulations and the listener of triggered rules.
     * If you need to just register rules it's better to use @webRequest header.
     * Note, webRequest proceeds only requests with types sub_frame, script, xhr and websocket.
     * @param rules array of rules
     * @param listener is called when the rule is triggered, cannot impact on the rule action
     */
    declare function GM_webRequest(
        rules: Array<{
            /** for which URLs the rule should be triggered, string value is shortening for `{ include: [selector] }` */
            selector: string | {
                /** URLs, patterns, and regexpes for rule triggering */
                include?: string | string[];
                /** URLs and patterns for rule trigering */
                match?: string | string[];
                /** URLs, patterns, and regexpes for not triggering the rule  */
                exclude?: string | string[];
            };
            /** what to do with the request, string value "cancel" is shortening for `{ cancel: true }` */
            action: 'cancel' | {
                /** whether to cancel the request */
                cancel?: boolean;
                /** redirect to some URL which must be included in any @match or @include header. When a string, redirects to the static URL */
                redirect?: string | {
                    /** a regexp to extract some parts of the URL, e.g. "([^:]+)://match.me/(.*)" */
                    from: string;
                    /** pattern for substitution, e.g. "$1://redirected.to/$2" */
                    to: string;
                }
            }
        }>,
        listener: (info: 'cancel' | 'redirect', message: 'ok' | 'error', details: {
            /** the triggered rule */
            rule: any,
            /** URL of the request */
            url: string,
            /** where the request was redirected */
            redirect_url?: string,
            /** error description */
            description?: string
        }) => void
    ): void;

    /*
     * Greasemonkey 4.x type definitions. Purportedly supported by recent Tampermonkey versions.

        This project is licensed under the MIT license.
        Copyrights are respective of each contributor listed at the beginning of each definition file.

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
        documentation files (the "Software"), to deal in the Software without restriction, including without limitation
        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
        to permit persons to whom the Software is furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of
        the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.

     */

    namespace GM4 {
        interface ScriptInfo {
            description: string;
            excludes: string[];
            includes: string[];
            matches: string[];
            name: string;
            namespace?: string | undefined;
            /**
             * An object keyed by resource name.
             * Each value is an object with keys `name` and `mimetype` and `url`
             * with string values.
             */
            resources: {
                [resourceName: string]: {
                    name: string
                    mimetype: string
                    url: string
                }
            };
            /** @default 'end' */
            runAt: 'start' | 'end' | 'idle';
            uuid: string;
            version: string;
        }

        type Value = string | boolean | number;

        interface Response<TContext> {
            readonly responseHeaders: string;
            readonly finalUrl: string;
            /** The same object passed into the original request */
            readonly context?: TContext | undefined;

            readonly readyState: 1 | 2 | 3 | 4;
            readonly response: any;
            readonly responseText: string;
            readonly responseXML: Document | false;
            readonly status: number;
            readonly statusText: string;
        }

        interface ProgressResponse<TContext> extends Response<TContext> {
            lengthComputable: boolean;
            loaded: number;
            total: number;
        }

        interface Request<TContext = any> {
            // Fields

            /**
             * The URL to make the request to. Must be an absolute URL, beginning
             * with the scheme. May be relative to the current page.
             */
            url: string;
            /** String type of HTTP request to make (E.G. "GET", "POST") */
            method:
                | 'GET'
                | 'POST'
                | 'PUT'
                | 'DELETE'
                | 'PATCH'
                | 'HEAD'
                | 'TRACE'
                | 'OPTIONS'
                | 'CONNECT';
            /**
             * When true, the data is sent as a Blob
             * @default false
             */
            binary?: boolean | undefined;
            /**
             * Any object (Compatibility: 1.10+). This object will also be the
             * context property of the Response Object.
             */
            context?: TContext | undefined;
            /**
             * Data to send in the request body. Usually for POST method requests.
             * If the data field contains form-encoded data, you usually must also
             * set the header `'Content-Type': 'application/x-www-form-urlencoded'`
             * in the `headers` field.
             */
            data?: string | undefined;
            /** A set of headers to include in the request */
            headers?: {
                [header: string]: string
            } | undefined;
            /**
             * A MIME type to specify with the request (e.g.
             * "text/html; charset=ISO-8859-1")
             */
            overrideMimeType?: string | undefined;
            /** User name to use for authentication purposes. */
            user?: string | undefined;
            /** Password to use for authentication purposes */
            password?: string | undefined;
            /**
             * When `true`, this is a synchronous request.
             * Be careful: The entire Firefox UI will be locked and frozen until the
             * request completes.In this mode, more data will be available in the
             * return value.
             */
            synchronous?: boolean | undefined;
            /**
             * The number of milliseconds to wait before terminating the call. Zero
             * (the default) means wait forever.
             */
            timeout?: number | undefined;
            /**
             * Object containing optional function callbacks to monitor the upload
             * of data.
             */
            upload?: {
                onabort?(response: Response<TContext>): void
                onerror?(response: Response<TContext>): void
                onload?(response: Response<TContext>): void
                onprogress?(response: ProgressResponse<TContext>): void
            } | undefined;

            // Event handlers

            /** Will be called when the request is aborted */
            onabort?(response: Response<TContext>): void;
            /** Will be called if an error occurs while processing the request */
            onerror?(response: Response<TContext>): void;
            /** Will be called when the request has completed successfully */
            onload?(response: Response<TContext>): void;
            /** Will be called when the request progress changes */
            onprogress?(response: ProgressResponse<TContext>): void;
            /** Will be called repeatedly while the request is in progress */
            onreadystatechange?(response: Response<TContext>): void;
            /** Will be called if/when the request times out */
            ontimeout?(response: Response<TContext>): void;
        }
    }

    let GM: {
        // Headers

        /**
         * Meta data about the running user script.
         * @see {@link https://wiki.greasespot.net/GM.info}
         */
        info: {
            /** An object containing data about the currently running script */
            script: GM4.ScriptInfo
            /**
             * A string, the entire literal Metadata Block (without the delimiters)
             * for the currently running script
             */
            scriptMetaStr: string
            /**
             * The name of the user script engine handling this script's execution.
             * The string `Greasemonkey`
             */
            scriptHandler: string
            /** The version of Greasemonkey, a string e.g. `4.0` */
            version: string
        }

        // Values

        /**
         * Allows user script authors to persist simple values across page loads and
         * across origins.
         * Strings, booleans, and integers are currently the only allowed data types.
         * @see {@link https://wiki.greasespot.net/GM.setValue}
         * @param name The unique (within this script) name for this value.
         * Should be restricted to valid Javascript identifier characters.
         * @param value Any valid value of these types. Any other type may cause
         * undefined behavior, including crashes
         * @returns A Promise, resolved successfully with no value on success,
         * rejected with no value on failure
         */
        setValue(name: string, value: GM4.Value): Promise<void>

        /**
         * Retrieves a value that was set with `GM.setValue`
         * @see {@link https://wiki.greasespot.net/GM.getValue}
         * @param name The property name to get
         * @param defaultValue The default value to be returned when none has
         * previously been set
         * @returns A Promise, rejected in case of error and otherwise resolved with:
         * - When this name has been set - `string`, `integer` or `boolean` as
         * previously set
         * - When this name has not been set, and default is provided - The value
         * passed as default
         * - When this name has not been set, and default is not provided -
         * `undefined`
         * @example
         * // Retrieving the value associated with the name 'timezoneOffset' with a default value defined:
         * const timezoneOffset = await GM.getValue("timezoneOffset", -5)
         * @example
         * // For structured data used `JSON.stringify()` to place an object into storage and then `JSON.parse()` to convert it back
         * const storedObject = JSON.parse(await GM.getValue('foo', '{}'));
         */
        getValue<TValue = GM4.Value>(
            name: string,
            defaultValue?: TValue
        ): Promise<TValue | undefined>

        /**
         * Deletes an existing name / value pair from storage.
         * @see {@link https://wiki.greasespot.net/GM.deleteValue}
         * @param name Property name to delete
         * @returns A Promise, resolved successfully with no value on success,
         * rejected with no value on failure.
         */
        deleteValue(name: string): Promise<void>

        /**
         * Retrieves an array of preference names that this script has stored
         * @see {@link https://wiki.greasespot.net/GM.listValues}
         * @returns A Promise, rejected in case of error and otherwise resolved with
         * an string[] for previously set values
         */
        listValues(): Promise<string[]>

        // Resources

        /**
         * Given a defined `@resource`, this method returns it as a URL
         * @see {@link https://wiki.greasespot.net/GM.getResourceUrl}
         * @param resourceName The name provided when the `@resource` was defined
         * @returns A Promise, rejected on failure and resolved with a string URL on
         * success.
         * Treat the result as opaque string. It will work where you need a URL
         * (for a `<link>` or `<style>` for CSS, for an `<img>` tag, or similar).
         */
        getResourceUrl(resourceName: string): Promise<string>

        // Other

        /**
         * Displays a notification to the user, using the underlying operating
         * system's notification mechanism
         * @see {@link https://wiki.greasespot.net/GM.notification}
         * @param text The main notification text
         * @param title The title of the notification
         * @param image The URL for an image to display in the dialog. If not
         * provided, the Greasemonkey logo by default.
         * @param onClick Callback, triggered when the notification's button is
         * clicked.
         */
        notification(
            text: string,
            title: string,
            image?: string,
            onClick?: () => void
        ): void

        /**
         * Opens the specified URL in a new tab.
         * @see {@link https://wiki.greasespot.net/GM.openInTab}
         * @param url The URL to navigate the new tab to
         * @param openInBackground Force tab to/to not open in a background tab.
         * Default (unspecified) behavior honors Firefox configuration.
         */
        openInTab(url: string, openInBackground?: boolean): void

        /**
         * Adds an item to the User Script Commands menu.
         * @param caption The caption to display on the menu item.
         * @param commandFunc The function to call when the menu item is selected.
         * @param accessKey A single character that can be used to select the
         * item when the menu is open. It should be a letter in the caption.
         * @see {@link https://wiki.greasespot.net/GM.registerMenuCommand}
         */
        registerMenuCommand(caption: string, commandFunc: () => void, accessKey?: string): void;

        /**
         * Sets the current contents of the operating system's clipboard
         * @see {@link https://wiki.greasespot.net/GM.setClipboard}
         */
        setClipboard(text: string): void

        /**
         * Performs a similar function to the standard XMLHttpRequest object, but
         * allows these requests to cross the [same origin policy]{@link https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy} boundaries.
         * @see {@link https://wiki.greasespot.net/GM.xmlHttpRequest}
         */
        xmlHttpRequest(details: GM4.Request): void
    };
}

export namespace GM_Types {

    type ValueChangeListener = (name: string, oldValue: any, newValue: any, remote: boolean) => any;

    interface OpenTabOptions {
        active?: boolean,
        insert?: boolean,
        setParent?: boolean
    }

    interface OpenTabResult {
        closed: boolean;
        close(): void;
        onclose?: () => void;
    }

    interface XHRResponse<CONTEXT_TYPE> extends Function {

        DONE: 4,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        OPENED: 1,
        UNSENT: 0

        context: CONTEXT_TYPE,
        finalUrl: string,
        readyState: 0 | 1 | 2 | 3 | 4,
        responseHeaders: string,
        status: number,
        statusText: string,
        response: ArrayBuffer | Blob | object | null,
        responseText: string,
        responseXML: Document | null
    }

    interface XHRProgress<CONTEXT_TYPE> extends XHRResponse<CONTEXT_TYPE> {
        done: number,
        lengthComputable: boolean,
        loaded: number,
        position: number,
        total: number,
        totalSize: number
    }

    type Listener<OBJ> = (this: OBJ, event: OBJ) => any;

    interface XHRDetails<CONTEXT_TYPE> {
        method?: 'GET' | 'HEAD' | 'POST',
        url?: string,
        headers?: { [key: string]: string },
        data?: string | Blob | FormData, // https://github.com/greasemonkey/greasemonkey/issues/1585 it just WORKS??
        binary?: boolean,
        timeout?: number,
        context?: CONTEXT_TYPE,
        responseType?: 'arraybuffer' | 'blob' | 'json',
        overrideMimeType?: string,
        anonymous?: boolean,
        fetch?: boolean,
        username?: string,
        password?: string,

        onload?: Listener<XHRResponse<CONTEXT_TYPE>>,
        onloadstart?: Listener<XHRResponse<CONTEXT_TYPE>>,
        onprogress?: Listener<XHRProgress<CONTEXT_TYPE>>,
        onreadystatechange?: Listener<XHRResponse<CONTEXT_TYPE>>,
        ontimeout?: Listener<Function>,
        onabort?: Function,
        onerror?: Function
    }

    interface AbortHandle<RETURN_TYPE> {
        abort(): RETURN_TYPE
    }

    interface DownloadError {
        error: 'not_enabled' | 'not_whitelisted' | 'not_permitted' | 'not_supported' | 'not_succeeded',
        details?: string
    }

    interface DownloadDetails {
        url: string,
        name: string,
        headers?: { readonly [key: string]: string },
        saveAs?: boolean,
        timeout?: number,
        onerror?: Listener<DownloadError>,
        ontimeout?: Listener<object>,
        onload?: Listener<object>,
        onprogress?: Listener<XHRProgress<void>>
    }

    interface NotificationThis extends NotificationDetails {
        id: string
    }

    type NotificationOnClick = (this: NotificationThis) => any;
    type NotificationOnDone = (this: NotificationThis, clicked: boolean) => any;

    interface NotificationDetails {
        text?: string,
        title?: string,
        image?: string,
        highlight?: boolean,
        timeout?: number
        onclick?: NotificationOnClick,
        ondone?: NotificationOnDone,
    }

    interface Cookie {
        /** The domain of the cookie. If omitted, the cookie becomes a host-only cookie. */
        domain: string;
        /** Whether the cookie should be marked as HttpOnly. Defaults to false. */
        httpOnly: boolean;
        /** Whether the cookie should be marked as Secure. Defaults to false. */
        secure: boolean;
        /** The name of the cookie. Empty by default if omitted. */
        name: string;
        /** The path of the cookie. Defaults to the path portion of the url parameter. */
        path: string;
        /** The cookie's same-site status. Defaults to "unspecified", i.e., if omitted, the cookie is set without specifying a SameSite attribute. */
        sameSite: 'no_restriction' | 'lax' | 'strict' | 'unspecified';
        /** The value of the cookie. */
        value: string;
        /** True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date. */
        session: boolean;
        /** True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie). */
        hostOnly: boolean;
        /** The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie becomes a session cookie. */
        expirationDate?: number;
    }

}
